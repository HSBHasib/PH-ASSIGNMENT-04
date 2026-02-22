let inverviewLists = [];
let rejectedLists = [];

let totalCount = document.getElementById('total');
let jobCountText = document.getElementById('jobCount');
let InterviewCount = document.getElementById('InterviewCount');
let RejectedCount = document.getElementById('RejectedCount');

const mainContainer = document.querySelector('main');
const allCards = document.getElementById('allCards');
const allFilterBtn = document.getElementById('all-top-filter-btn');
const filterdCards = document.getElementById('filterdCards');

let currentTab = 'all';

// update the counts in the dashboard
function countCalculator() {
    totalCount.textContent = allCards.children.length;
    InterviewCount.textContent = inverviewLists.length;
    RejectedCount.textContent = rejectedLists.length;

    if (currentTab === 'all') {
        jobCountText.textContent = allCards.children.length;
    } else {
        // if no cards are available in the filtered view, show 0 count
        if (filterdCards.querySelector('#no-jobs-msg')) {
            jobCountText.textContent = 0;
        } else {
            jobCountText.textContent = filterdCards.children.length;
        }
    }
}

// Filter button event listener for All, Interview, Rejected buttons
allFilterBtn.addEventListener('click', function(dets) {
    const clickedBtn = dets.target.closest('button');
    if (!clickedBtn) return;

    // chenge the color of the clicked button and reset the color of other buttons
    const allButtons = allFilterBtn.children;
    console.log("All Butttons : ", allButtons);

    for (let btn of allButtons) {
        btn.classList.remove('bg-[#3B82F6]', 'text-white');
        btn.classList.add('bg-white', 'text-gray-500');
    }
    clickedBtn.classList.remove('bg-white', 'text-gray-500');
    clickedBtn.classList.add('bg-[#3B82F6]', 'text-white');

    // show the cards based on the clicked button (All, Interview, Rejected)
    if (clickedBtn.id === 'interview-filter-btn') {
        currentTab = 'interview';
        allCards.classList.add('hidden');
        filterdCards.classList.remove('hidden');
        renderCards(inverviewLists);
    } 
    else if (clickedBtn.id === 'rejected-filter-btn') {
        currentTab = 'rejected';
        allCards.classList.add('hidden');
        filterdCards.classList.remove('hidden');
        renderCards(rejectedLists);
    } 
    else {
        currentTab = 'all';
        filterdCards.classList.add('hidden');
        allCards.classList.remove('hidden');
    }
    countCalculator();
});

// if users click on the interview, rejected or delete button, this event listener will handle all those events using event delegation
mainContainer.addEventListener('click', function(dets) {
    const clickedCard = dets.target.closest('.cards');
    if (!clickedCard) return;

    // select the job details from the clicked card
    const jobTitle = clickedCard.querySelector('.jobTitle').textContent;
    const jobRole = clickedCard.querySelector('.jobRole').textContent;
    const jobFetures = clickedCard.querySelector('.jobFetures').textContent;
    const jobStatus = clickedCard.querySelector('.jobStatus').textContent;
    const jobDes = clickedCard.querySelector('.JobDes').textContent;

    const cardInfo = { 
        jobTitle, 
        jobRole, 
        jobFetures, 
        jobStatus, 
        jobDes 
    };

    // shortcut for the clicked element
    const target = dets.target;

    // interview button logic
    if (target.classList.contains('interview-btn')) {
        // if the job is already in the rejected list, then remove it from the rejected list
        rejectedLists = rejectedLists.filter(item => item.jobTitle !== jobTitle);
        
        // check is the jobTitle is already in the interview list or not
        let exists = false;
        for(let item of inverviewLists) { 
            if(item.jobTitle === jobTitle) { 
                exists = true;
                break; 
            }    
        }

        // is jobTitle is not exists in the interview list, then add it to the interview list and update the status in the main card
        if (!exists) {
            cardInfo.jobStatus = "INTERVIEW";
            inverviewLists.push(cardInfo);
            updateStatusInAll(jobTitle, "INTERVIEW");
        } else {
            inverviewLists = inverviewLists.filter(item => item.jobTitle !== jobTitle);
            updateStatusInAll(jobTitle, "Not Applied");
        }
        refreshUI();
    }
    
    // rejected button logic | (same as interview button logic but for rejected list)
    else if (target.classList.contains('rejected-btn')) {
        inverviewLists = inverviewLists.filter(item => item.jobTitle !== jobTitle);

        let exists = false;
        for(let item of rejectedLists) { if(item.jobTitle === jobTitle) exists = true; }

        if (!exists) {
            cardInfo.jobStatus = "REJECTED";
            rejectedLists.push(cardInfo);
            updateStatusInAll(jobTitle, "REJECTED");
        } else {
            rejectedLists = rejectedLists.filter(item => item.jobTitle !== jobTitle);
            updateStatusInAll(jobTitle, "Not Applied");
        }
        refreshUI();
    }

    // user click on the delete button, delete the card from everywhere
    else if (target.closest('.btn-delete')) {
        inverviewLists = inverviewLists.filter(item => item.jobTitle !== jobTitle);
        rejectedLists = rejectedLists.filter(item => item.jobTitle !== jobTitle);
        
        for (let card of allCards.children) {
            if (card.querySelector('.jobTitle').textContent === jobTitle) {
                card.remove();
                break;
            }
        }
        refreshUI();
    }
});

// change the jobStatus based on user action (Interview, Rejected or delete) every card in the main section (All cards section)
function updateStatusInAll(title, status) {
    for (let card of allCards.children) {
        if(card.querySelector('.jobTitle').textContent === title) {
            card.querySelector('.jobStatus').textContent = status;
        }
    }
}

// update the UI based on the current selected tab (Interview or Rejected) and also update the counts in the dashboard
function refreshUI() {
    if (currentTab === 'interview') {
        renderCards(inverviewLists);
    } 

    if (currentTab === 'rejected') {
        renderCards(rejectedLists);
    } 
    countCalculator();
}

// Dynamically create cards based on the list and render them in the filtered section (Interview or Rejected)
function renderCards(list) {
    filterdCards.innerHTML = '';

    if (list.length === 0) {
        filterdCards.innerHTML = `
            <div id="no-jobs-msg" class="grid place-items-center text-center border border-gray-100 p-16 rounded-lg shadow space-y-2">
                <img class="w-16 mx-auto" src="./jobs.png" alt="no-jobs">
                <h2 class="text-[#002C5C] font-bold text-lg">No jobs available</h2>
                <p class="text-[#64748B]">Check back soon for new job opportunities</p>
            </div>`;
        return;
    }

    for (let item of list) {
        let div = document.createElement('div');
        div.className = "cards flex justify-between border border-gray-100 p-8 rounded-lg shadow mb-5";
        div.innerHTML = `
            <div>
                <div class="space-y-1">
                    <p class="jobTitle text-xl text-[#002C5C] font-bold">${item.jobTitle}</p>
                    <p class="jobRole text-md text-[#64748B]">${item.jobRole}</p>
                </div>
                <div class="py-4"><p class="jobFetures text-[#64748B] text-md">${item.jobFetures}</p></div>
                <div class="space-y-1.5">
                    <p class="jobStatus btn btn-soft btn-primary text-[#002C5C] rounded-md ">${item.jobStatus}</p>
                    <p class="JobDes text-[#323B49] text-md">${item.jobDes}</p>
                </div>
                <div class="flex gap-3 pt-3">
                    <button class="interview-btn btn btn-sm btn-outline btn-success font-bold">INTERVIEW</button>
                    <button class="rejected-btn btn-sm btn btn-outline btn-error font-bold">REJECTED</button>
                </div>
            </div>
            <div class="text-gray-600">
                <button class="btn-delete btn h-[32px] w-[32px] btn-outline px-3 rounded-full"><i class="fa-regular fa-trash-can"></i></button>
            </div>`;
        filterdCards.appendChild(div);
    }
}

// initially calculate the counts when the page loads
countCalculator();
