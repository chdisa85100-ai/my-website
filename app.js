// Supabase Configuration
const SUPABASE_URL = 'https://gukzmqtifbqpumjnlhge.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1a3ptcXRpZmJxcHVtam5saGdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5OTAyOTgsImV4cCI6MjA5MDU2NjI5OH0.klZDEIO58E9oqzzyUqao8GFgtU9JVz8M9StAPhkoz1U';
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const allQuestions = [
    { question: "대한민국의 수도는?", options: ["서울", "부산", "인천", "대구"], answer: 0 },
    { question: "프랑스의 수도는?", options: ["마르세유", "파리", "리옹", "니스"], answer: 1 },
    { question: "일본의 수도는?", options: ["오사카", "교토", "도쿄", "나고야"], answer: 2 },
    { question: "미국의 수도는?", options: ["뉴욕", "로스앤젤레스", "시카고", "워싱턴 D.C."], answer: 3 },
    { question: "영국의 수도는?", options: ["맨체스터", "버밍엄", "런던", "리버풀"], answer: 2 },
    { question: "독일의 수도는?", options: ["뮌헨", "함부르크", "베를린", "프랑크푸르트"], answer: 2 },
    { question: "이탈리아의 수도는?", options: ["밀라노", "로마", "나폴리", "베네치아"], answer: 1 },
    { question: "중국의 수도는?", options: ["상하이", "베이징", "광저우", "선전"], answer: 1 },
    { question: "브라질의 수도는?", options: ["리우데자네이루", "상파울루", "브라질리아", "살바도르"], answer: 2 },
    { question: "캐나다의 수도는?", options: ["토론토", "밴쿠버", "오타와", "몬트리올"], answer: 2 },
    { question: "호주의 수도는?", options: ["시드니", "멜버른", "퍼스", "캔버라"], answer: 3 },
    { question: "러시아의 수도는?", options: ["상트페테르부르크", "모스크바", "노보시비르스크", "예카테린부르크"], answer: 1 },
    { question: "스페인의 수도는?", options: ["바르셀로나", "마드리드", "세비야", "발렌시아"], answer: 1 },
    { question: "멕시코의 수도는?", options: ["칸쿤", "과달라하라", "멕시코시티", "몬테레이"], answer: 2 },
    { question: "인도의 수도는?", options: ["뭄바이", "콜카타", "첸나이", "뉴델리"], answer: 3 },
    { question: "베트남의 수도는?", options: ["호치민", "하노이", "다낭", "하이퐁"], answer: 1 },
    { question: "태국의 수도는?", options: ["치앙마이", "푸켓", "방콕", "파타야"], answer: 2 },
    { question: "필리핀의 수도는?", options: ["세부", "마닐라", "다바오", "케손시티"], answer: 1 },
    { question: "인도네시아의 수도는?", options: ["발리", "자카르타", "수라바야", "반둥"], answer: 1 },
    { question: "터키(튀르키예)의 수도는?", options: ["이스탄불", "안카라", "이즈미르", "안탈리아"], answer: 1 },
    { question: "그리스의 수도는?", options: ["산토리니", "테살로니키", "아테네", "로도스"], answer: 2 },
    { question: "이집트의 수도는?", options: ["알렉산드리아", "카이로", "기제", "룩소르"], answer: 1 },
    { question: "네덜란드의 수도는?", options: ["로테르담", "헤이그", "위트레흐트", "암스테르담"], answer: 3 },
    { question: "벨기에의 수도는?", options: ["안트베르펜", "헨트", "브뤼셀", "브뤼허"], answer: 2 },
    { question: "스위스의 수도는?", options: ["취리히", "제네바", "바젤", "베른"], answer: 3 },
    { question: "오스트리아의 수도는?", options: ["잘츠부르크", "인스부르크", "빈", "그라츠"], answer: 2 },
    { question: "아르헨티나의 수도는?", options: ["코르도바", "로사리오", "부에노스아이레스", "멘도사"], answer: 2 },
    { question: "칠레의 수도는?", options: ["발파라이소", "산티아고", "콘셉시온", "안토파가스타"], answer: 1 },
    { question: "콜롬비아의 수도는?", options: ["메데인", "칼리", "보고타", "바랑키야"], answer: 2 },
    { question: "페루의 수도는?", options: ["쿠스코", "리마", "아레키파", "트루히요"], answer: 1 },
    { question: "포르투갈의 수도는?", options: ["포르투", "리스본", "코임브라", "파루"], answer: 1 },
    { question: "스웨덴의 수도는?", options: ["예테보리", "말뫼", "스톡홀름", "웁살라"], answer: 2 },
    { question: "노르웨이의 수도는?", options: ["베르겐", "오슬로", "스타방에르", "트론헤임"], answer: 1 },
    { question: "덴마크의 수도는?", options: ["오르후스", "코펜하겐", "오덴세", "올보르"], answer: 1 },
    { question: "핀란드의 수도는?", options: ["에스포", "탐페레", "헬싱키", "반타"], answer: 2 },
    { question: "폴란드의 수도는?", options: ["크라쿠프", "바르샤바", "우치", "브로츠와프"], answer: 1 },
    { question: "체코의 수도는?", options: ["브르노", "오스트라바", "플젠", "프라하"], answer: 3 },
    { question: "헝가리의 수도는?", options: ["데브레첸", "미슈콜츠", "세게드", "부다페스트"], answer: 3 },
    { question: "루마니아의 수도는?", options: ["클루지나포카", "티미쇼아라", "부쿠레슈티", "이아시"], answer: 2 },
    { question: "우크라이나의 수도는?", options: ["오데사", "리비우", "키이우", "하르키우"], answer: 2 },
    { question: "사우디아라비아의 수도는?", options: ["제다", "메카", "리야드", "메디나"], answer: 2 },
    { question: "아랍에미리트의 수도는?", options: ["두바이", "아부다비", "샤르자", "알레인"], answer: 1 },
    { question: "이스라엘의 수도는?", options: ["텔아비브", "하이파", "예루살렘", "아슈도드"], answer: 2 },
    { question: "이란의 수도는?", options: ["이스파한", "마슈하드", "테헤란", "시라즈"], answer: 2 },
    { question: "이라크의 수도는?", options: ["바스라", "모술", "아르빌", "바그다드"], answer: 3 },
    { question: "싱가포르의 수도는?", options: ["싱가포르", "쿠알라룸푸르", "방콕", "자카르타"], answer: 0 },
    { question: "말레이시아의 수도는?", options: ["조호르바루", "페낭", "쿠알라룸푸르", "말라카"], answer: 2 },
    { question: "뉴질랜드의 수도는?", options: ["오클랜드", "크라이스트처치", "웰링턴", "해밀턴"], answer: 2 },
    { question: "남아프리카공화국의 수도는?", options: ["요하네스버그", "케이프타운", "프리토리아", "더반"], answer: 2 },
    { question: "케냐의 수도는?", options: ["몸바사", "나이로비", "키수무", "엘도레트"], answer: 1 },
    { question: "모로코의 수도는?", options: ["카사블랑카", "마라케시", "라바트", "페스"], answer: 2 },
    { question: "에티오피아의 수도는?", options: ["아디스아바바", "디레다와", "메켈레", "바히르다르"], answer: 0 },
    { question: "나이지리아의 수도는?", options: ["라고스", "아부자", "카노", "이바단"], answer: 1 },
    { question: "아일랜드의 수도는?", options: ["코크", "더블린", "골웨이", "리머릭"], answer: 1 },
    { question: "아이슬란드의 수도는?", options: ["레이캬비크", "아쿠레이리", "코파보구르", "하프나르피외르뒤르"], answer: 0 },
    { question: "카자흐스탄의 수도는?", options: ["알마티", "아스타나", "시켄트", "카라간다"], answer: 1 },
    { question: "우즈베키스탄의 수도는?", options: ["사마르칸트", "타슈켄트", "부하라", "히바"], answer: 1 },
    { question: "몽골의 수도는?", options: ["다르항", "에르데네트", "울란바토르", "초이발산"], answer: 2 },
    { question: "파키스탄의 수도는?", options: ["카라치", "라호르", "이슬라마바드", "파이살라바드"], answer: 2 },
    { question: "방글라데시의 수도는?", options: ["치타공", "다카", "쿨나", "라지샤히"], answer: 1 },
    { question: "스리랑카의 수도는?", options: ["콜롬보", "스리자야와르데네푸라코테", "캔디", "갈"], answer: 1 },
    { question: "대만의 수도는?", options: ["타이중", "가오슝", "타이베이", "타이난"], answer: 2 },
    { question: "북한의 수도는?", options: ["함흥", "청진", "평양", "남포"], answer: 2 },
    { question: "캄보디아의 수도는?", options: ["시엠립", "프놈펜", "시아누크빌", "바탐방"], answer: 1 },
    { question: "라오스의 수도는?", options: ["루앙프라방", "비엔티안", "팍세", "사반나켓"], answer: 1 },
    { question: "미얀마의 수도는?", options: ["양곤", "만달레이", "네피도", "바간"], answer: 2 },
    { question: "네팔의 수도는?", options: ["포카라", "카트만두", "랄릿푸르", "비라트나가르"], answer: 1 },
    { question: "크로아티아의 수도는?", options: ["두브로브니크", "스플리트", "자그레브", "자다르"], answer: 2 },
    { question: "세르비아의 수도는?", options: ["노비사드", "니슈", "베오그라드", "크라구예바츠"], answer: 2 },
    { question: "불가리아의 수도는?", options: ["플로브디프", "바르나", "소피아", "부르가스"], answer: 2 },
    { question: "슬로바키아의 수도는?", options: ["코시체", "프레쇼우", "브라티슬라바", "질리나"], answer: 2 },
    { question: "슬로베니아의 수도는?", options: ["마리보르", "첼레", "류블랴나", "크란"], answer: 2 },
    { question: "에스토니아의 수도는?", options: ["타르투", "탈린", "나르바", "패르누"], answer: 1 },
    { question: "라트비아의 수도는?", options: ["다우가프필스", "리가", "리에파야", "옐가바"], answer: 1 },
    { question: "리투아니아의 수도는?", options: ["카우나스", "빌뉴스", "클라이페다", "샤울레이"], answer: 1 },
    { question: "쿠바의 수도는?", options: ["바데데로", "아바나", "산티아고데쿠바", "올긴"], answer: 1 },
    { question: "파나마의 수도는?", options: ["콜론", "다비드", "파나마시티", "산티아고"], answer: 2 },
    { question: "우루과이의 수도는?", options: ["살토", "시우다드델라코스타", "몬테비데오", "파이산두"], answer: 2 },
    { question: "에콰도르의 수도는?", options: ["과야킬", "키토", "쿠엥카", "만타"], answer: 1 },
    { question: "파라과이의 수도는?", options: ["아순시온", "시우다드델에스테", "산로렌소", "루케"], answer: 0 },
    { question: "볼리비아의 수도는?", options: ["라파스", "수크레", "산태쿠르스", "코차밤바"], answer: 1 },
    { question: "베네수엘라의 수도는?", options: ["마라카이보", "발렌시아", "카라카스", "바르키시메토"], answer: 2 },
    { question: "알제리의 수도는?", options: ["오란", "콘스탄틴", "알제", "안나바"], answer: 2 },
    { question: "튀니지의 수도는?", options: ["스팍스", "수스", "튀니스", "카이루안"], answer: 2 },
    { question: "가나의 수도는?", options: ["쿠마시", "타말레", "아크라", "세콘디타코라디"], answer: 2 },
    { question: "탄자니아의 수도는?", options: ["다르에스살람", "도도마", "므완자", "아루샤"], answer: 1 },
    { question: "우간다의 수도는?", options: ["엔테베", "캄팔라", "진자", "음바라라"], answer: 1 },
    { question: "요르단의 수도는?", options: ["자르카", "이르비드", "암만", "아카바"], answer: 2 },
    { question: "레바논의 수도는?", options: ["트리폴리", "시돈", "베이루트", "티레"], answer: 2 },
    { question: "시리아의 수도는?", options: ["알레포", "홈스", "다마스쿠스", "라타키아"], answer: 2 },
    { question: "아제르바이잔의 수도는?", options: ["간자", "숨가이트", "바쿠", "란카란"], answer: 2 },
    { question: "조지아의 수도는?", options: ["쿠타이시", "바투미", "트빌리시", "루스타비"], answer: 2 },
    { question: "아르메니아의 수도는?", options: ["규므리", "바나조르", "예레반", "흐라즈단"], answer: 2 },
    { question: "카타르의 수도는?", options: ["알코르", "알와크라", "도하", "알라이얀"], answer: 2 },
    { question: "쿠웨이트의 수도는?", options: ["쿠웨이트시티", "자흐라", "살미야", "파하힐"], answer: 0 },
    { question: "벨라루스의 수도는?", options: ["고멜", "모길료프", "민스크", "비텝스크"], answer: 2 },
    { question: "리비아의 수도는?", options: ["벵가지", "미스라타", "트리폴리", "자위야"], answer: 2 },
    { question: "수단의 수도는?", options: ["옴두르만", "카르툼", "북카르툼", "포트수단"], answer: 1 },
    { question: "아프가니스탄의 수도는?", options: ["칸다하르", "헤라트", "마자르이샤리프", "카불"], answer: 3 },
    { question: "바티칸 시국의 수도는?", options: ["바티칸 시국", "로마", "피렌체", "베네치아"], answer: 0 }
];

let questions = [];
const QUIZ_COUNT = 10;

let state = {
    currentQuestionIndex: 0,
    score: 0,
    nickname: '',
    results: []
};

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const nicknameInput = document.getElementById('nickname-input');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreDisplay = document.getElementById('score-display');
const resultNickname = document.getElementById('result-nickname');
const leaderboardList = document.getElementById('leaderboard-list');
const badgeContainer = document.getElementById('badge-container');
const feedbackText = document.getElementById('feedback-text');

// Initialize
function init() {
    updateLeaderboardUI();
    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', restartQuiz);
}

function startQuiz() {
    const nickname = nicknameInput.value.trim();
    if (!nickname) {
        alert('닉네임을 입력해주세요!');
        return;
    }
    state.nickname = nickname;
    state.currentQuestionIndex = 0;
    state.score = 0;
    
    // Select 10 random questions
    questions = [...allQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, QUIZ_COUNT);
    
    showScreen(quizScreen);
    renderQuestion();
}

function renderQuestion() {
    const question = questions[state.currentQuestionIndex];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    
    // Update progress
    const progress = ((state.currentQuestionIndex + 1) / QUIZ_COUNT) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `QUESTION ${String(state.currentQuestionIndex + 1).padStart(2, '0')}`;

    question.options.forEach((option, index) => {
        const button = document.createElement('div');
        button.className = 'option';
        button.textContent = option;
        button.addEventListener('click', () => handleAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function handleAnswer(selectedIndex) {
    const question = questions[state.currentQuestionIndex];
    const options = optionsContainer.children;
    
    // Disable all options
    for (let i = 0; i < options.length; i++) {
        options[i].style.pointerEvents = 'none';
        if (i === question.answer) {
            options[i].classList.add('correct');
        } else if (i === selectedIndex) {
            options[i].classList.add('wrong');
        }
    }

    if (selectedIndex === question.answer) {
        state.score++;
    }

    setTimeout(() => {
        state.currentQuestionIndex++;
        if (state.currentQuestionIndex < QUIZ_COUNT) {
            renderQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

function showResults() {
    showScreen(resultScreen);
    resultNickname.textContent = `${state.nickname} 님의 실력은...`;
    scoreDisplay.textContent = `${state.score} / ${QUIZ_COUNT}`;
    
    // Badge & Feedback logic
    let badge = '';
    let feedback = '';
    let badgeColor = '';
    
    const percent = (state.score / QUIZ_COUNT) * 100;
    
    if (percent === 100) {
        badge = 'LEGEND';
        feedback = '완벽합니다! 당신은 진정한 세계 지리 박사입니다.';
        badgeColor = '#22d3ee';
    } else if (percent >= 80) {
        badge = 'EXPERT';
        feedback = '대단한 실력이네요! 세계 수도를 거의 다 꿰고 계시군요.';
        badgeColor = '#a78bfa';
    } else if (percent >= 50) {
        badge = 'SCHOLAR';
        feedback = '준수한 실력입니다. 조금만 더 공부하면 완벽해질 거예요.';
        badgeColor = '#f472b6';
    } else {
        badge = 'NOVICE';
        feedback = '아직 배울 것이 많네요! 다시 도전해서 실력을 키워보세요.';
        badgeColor = '#94a3b8';
    }
    
    badgeContainer.innerHTML = `<span style="background: ${badgeColor}; color: #000; padding: 0.3rem 1rem; border-radius: 20px; font-weight: 800; font-size: 0.8rem; letter-spacing: 0.1em;">${badge}</span>`;
    feedbackText.textContent = feedback;
    
    saveScore(state.nickname, state.score);
    updateLeaderboardUI();
}

async function saveScore(name, score) {
    try {
        const { data, error } = await supabaseClient
            .from('quiz_scores')
            .insert([{ user_name: name, score: score }]);
        
        if (error) throw error;
        updateLeaderboardUI();
    } catch (err) {
        console.error('Error saving score:', err.message);
    }
}

async function updateLeaderboardUI() {
    try {
        const { data: history, error } = await supabaseClient
            .from('quiz_scores')
            .select('*')
            .order('score', { ascending: false })
            .limit(10);
            
        if (error) throw error;

        if (!history || history.length === 0) {
            leaderboardList.innerHTML = '<p style="font-size: 0.8rem; opacity: 0.5;">아직 기록이 없습니다.</p>';
            return;
        }
        
        leaderboardList.innerHTML = history.map(item => `
            <div class="score-entry">
                <span class="name">${item.user_name}</span>
                <span class="val">${item.score} / ${QUIZ_COUNT}</span>
            </div>
        `).join('');
    } catch (err) {
        console.error('Error loading leaderboard:', err.message);
        leaderboardList.innerHTML = '<p style="font-size: 0.8rem; color: #ff6b6b">기록을 불러올 수 없습니다.</p>';
    }
}

function showScreen(screen) {
    [startScreen, quizScreen, resultScreen].forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function restartQuiz() {
    showScreen(startScreen);
}

init();
