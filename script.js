// ==========================
// STATE
// ==========================
let day = 1;
let index = 0;

// ==========================
// ELEMENTS
// ==========================
const daysContainer = document.getElementById("days");
const infoText = document.getElementById("infoText");

const card = document.querySelector(".card");

const wordTitle = document.getElementById("word-title");
const cardImg = document.getElementById("card-img");

const han = document.getElementById("han");
const py = document.getElementById("py");
const en = document.getElementById("en");

const sentenceHan = document.getElementById("sentence-han");
const sentencePy = document.getElementById("sentence-py");
const sentenceEn = document.getElementById("sentence-en");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const nextDayBtn = document.getElementById("nextDayBtn");

const audioBtn = document.getElementById("audioBtn");

// ==========================
// DATA
// ==========================
const DATA = {

1: [
{
han:"你好", py:"nǐ hǎo", en:"hello",
sentence_han:"你好，很高興認識你。",
sentence_py:"Nǐ hǎo, hěn gāoxìng rènshì nǐ.",
sentence_en:"Hello, nice to meet you.",
img:"assets/day1/pic/hello.png",
audio:"assets/day1/audio/hello.mp3"
},
{
han:"再見", py:"zài jiàn", en:"goodbye",
sentence_han:"再見，明天見！",
sentence_py:"Zài jiàn, míngtiān jiàn!",
sentence_en:"Goodbye, see you tomorrow!",
img:"assets/day1/pic/goodbye.png",
audio:"assets/day1/audio/goodbye.mp3"
},
{
han:"謝謝", py:"xiè xie", en:"thank you",
sentence_han:"謝謝你的幫忙。",
sentence_py:"Xièxie nǐ de bāngmáng.",
sentence_en:"Thank you for your help.",
img:"assets/day1/pic/thankyou.png",
audio:"assets/day1/audio/thankyou.mp3"
},
{
han:"對不起", py:"duì bù qǐ", en:"sorry",
sentence_han:"對不起，我遲到了。",
sentence_py:"Duìbuqǐ, wǒ chídào le.",
sentence_en:"Sorry, I am late.",
img:"assets/day1/pic/sorry.png",
audio:"assets/day1/audio/sorry.mp3"
},
{
han:"請", py:"qǐng", en:"please",
sentence_han:"請坐。",
sentence_py:"Qǐng zuò.",
sentence_en:"Please sit.",
img:"assets/day1/pic/please.png",
audio:"assets/day1/audio/please.mp3"
},
{
han:"歡迎", py:"huān yíng", en:"welcome",
sentence_han:"歡迎來台灣！",
sentence_py:"Huānyíng lái Táiwān!",
sentence_en:"Welcome to Taiwan!",
img:"assets/day1/pic/welcome.png",
audio:"assets/day1/audio/welcome.mp3"
},
{
han:"早安", py:"zǎo ān", en:"good morning",
sentence_han:"早安，你睡得好嗎？",
sentence_py:"Zǎo'ān, nǐ shuì de hǎo ma?",
sentence_en:"Good morning, did you sleep well?",
img:"assets/day1/pic/good-morning.png",
audio:"assets/day1/audio/goodmorning.mp3"
},
{
han:"晚安", py:"wǎn ān", en:"good night",
sentence_han:"晚安，做個好夢。",
sentence_py:"Wǎn'ān, zuò gè hǎo mèng.",
sentence_en:"Good night, sweet dreams.",
img:"assets/day1/pic/good-night.png",
audio:"assets/day1/audio/goodnight.mp3"
},
{
han:"好久不見", py:"hǎo jiǔ bú jiàn", en:"long time no see",
sentence_han:"好久不見，你最近好嗎？",
sentence_py:"Hǎojiǔ bú jiàn, nǐ zuìjìn hǎo ma?",
sentence_en:"Long time no see, how have you been?",
img:"assets/day1/pic/longtime-no-see.png",
audio:"assets/day1/audio/longtime.mp3"
},
{
han:"保重", py:"bǎo zhòng", en:"take care",
sentence_han:"保重，路上小心。",
sentence_py:"Bǎozhòng, lùshàng xiǎoxīn.",
sentence_en:"Take care, be careful on the way.",
img:"assets/day1/pic/takecare.png",
audio:"assets/day1/audio/takecare.mp3"
}
],

// ---------- DAY 2 ----------
2: [
{
han:"飯", py:"fàn", en:"meal",
sentence_han:"我想吃飯。",
sentence_py:"Wǒ xiǎng chī fàn.",
sentence_en:"I want to eat.",
img:"assets/day2/pic/rice.png",
audio:"assets/day2/audio/rice.mp3"
},
{
han:"很多", py:"hěn duō", en:"a lot",
sentence_han:"我有很多書。",
sentence_py:"Wǒ yǒu hěn duō shū.",
sentence_en:"I have many books.",
img:"assets/day2/pic/a-lot.png",
audio:"assets/day2/audio/a-lot.mp3"
},
{
han:"一點點", py:"yì diǎn diǎn", en:"a little",
sentence_han:"我只要一點點。",
sentence_py:"Wǒ zhǐ yào yìdiǎndiǎn.",
sentence_en:"I only want a little.",
img:"assets/day2/pic/little.png",
audio:"assets/day2/audio/little.mp3"
},
{
han:"你好嗎", py:"nǐ hǎo ma", en:"how are you",
sentence_han:"你好嗎？最近忙嗎？",
sentence_py:"Nǐ hǎo ma? Zuìjìn máng ma?",
sentence_en:"How are you? Busy lately?",
img:"assets/day2/pic/how-are-you.png",
audio:"assets/day2/audio/how-are-you.mp3"
},
{
han:"好的", py:"hǎo de", en:"okay",
sentence_han:"好的，沒問題。",
sentence_py:"Hǎo de, méi wèntí.",
sentence_en:"Okay, no problem.",
img:"assets/day2/pic/okay.png",
audio:"assets/day2/audio/okay.mp3"
},
{
han:"不", py:"bù", en:"no",
sentence_han:"不，我不要。",
sentence_py:"Bù, wǒ bú yào.",
sentence_en:"No, I don’t want it.",
img:"assets/day2/pic/no.png",
audio:"assets/day2/audio/no.mp3"
},
{
han:"多少錢", py:"duō shǎo qián", en:"how much",
sentence_han:"這個多少錢？",
sentence_py:"Zhège duōshǎo qián?",
sentence_en:"How much is this?",
img:"assets/day2/pic/how-much.png",
audio:"assets/day2/audio/how-much.mp3"
},
{
han:"幾個", py:"jǐ ge", en:"how many",
sentence_han:"你要幾個？",
sentence_py:"Nǐ yào jǐ ge?",
sentence_en:"How many do you want?",
img:"assets/day2/pic/how-many.png",
audio:"assets/day2/audio/how-many.mp3"
},
{
han:"對", py:"duì", en:"yes",
sentence_han:"對，就是這樣。",
sentence_py:"Duì, jiùshì zhèyàng.",
sentence_en:"Yes, that’s right.",
img:"assets/day2/pic/yes.png",
audio:"assets/day2/audio/yes.mp3"
},
{
han:"不好意思", py:"bù hǎo yì si", en:"excuse me",
sentence_han:"不好意思，請問廁所在哪裡？",
sentence_py:"Bù hǎoyìsi, qǐngwèn cèsuǒ zài nǎlǐ?",
sentence_en:"Excuse me, where is the bathroom?",
img:"assets/day2/pic/excuse-me.png",
audio:"assets/day2/audio/excuse-me.mp3"
}
],

// ---------- DAY 3 ----------
3: [
  {
  han:"牛肉", py:"niú ròu", en:"beef",
  sentence_han:"我喜歡吃牛肉。",
  sentence_py:"Wǒ xǐhuān chī niúròu.",
  sentence_en:"I like eating beef.",
  img:"assets/day3/pic/beef.png",
  audio:"assets/day3/audio/beef.mp3"
  },
  {
  han:"雞肉", py:"jī ròu", en:"chicken",
  sentence_han:"我想吃雞肉。",
  sentence_py:"Wǒ xiǎng chī jīròu.",
  sentence_en:"I want to eat chicken.",
  img:"assets/day3/pic/chicken.png",
  audio:"assets/day3/audio/chicken.mp3"
  },
  {
  han:"咖啡", py:"kā fēi", en:"coffee",
  sentence_han:"我早上喝咖啡。",
  sentence_py:"Wǒ zǎoshang hē kāfēi.",
  sentence_en:"I drink coffee in the morning.",
  img:"assets/day3/pic/coffee.png",
  audio:"assets/day3/audio/coffee.mp3"
  },
  {
  han:"雞蛋", py:"jī dàn", en:"egg",
  sentence_han:"我每天吃雞蛋。",
  sentence_py:"Wǒ měitiān chī jīdàn.",
  sentence_en:"I eat eggs every day.",
  img:"assets/day3/pic/egg.png",
  audio:"assets/day3/audio/egg.mp3"
  },
  {
  han:"水果", py:"shuǐ guǒ", en:"fruit",
  sentence_han:"我喜歡吃水果。",
  sentence_py:"Wǒ xǐhuān chī shuǐguǒ.",
  sentence_en:"I like eating fruit.",
  img:"assets/day3/pic/fruit.png",
  audio:"assets/day3/audio/fruit.mp3"
  },
  {
  han:"麵", py:"miàn", en:"noodles",
  sentence_han:"我吃麵。",
  sentence_py:"Wǒ chī miàn.",
  sentence_en:"I eat noodles.",
  img:"assets/day3/pic/noodle.png",
  audio:"assets/day3/audio/noodle.mp3"
  },
  {
  han:"湯", py:"tāng", en:"soup",
  sentence_han:"這個湯很好喝。",
  sentence_py:"Zhège tāng hěn hē hǎo.",
  sentence_en:"This soup is very good.",
  img:"assets/day3/pic/soup.png",
  audio:"assets/day3/audio/soup.mp3"
  },
  {
  han:"茶", py:"chá", en:"tea",
  sentence_han:"我喝茶。",
  sentence_py:"Wǒ hē chá.",
  sentence_en:"I drink tea.",
  img:"assets/day3/pic/tea.png",
  audio:"assets/day3/audio/tea.mp3"
  },
  {
  han:"蔬菜", py:"shū cài", en:"vegetables",
  sentence_han:"多吃蔬菜很健康。",
  sentence_py:"Duō chī shūcài hěn jiànkāng.",
  sentence_en:"Eating vegetables is healthy.",
  img:"assets/day3/pic/vegetable.png",
  audio:"assets/day3/audio/vegetable.mp3"
  },
  {
  han:"水", py:"shuǐ", en:"water",
  sentence_han:"我每天喝水。",
  sentence_py:"Wǒ měitiān hē shuǐ.",
  sentence_en:"I drink water every day.",
  img:"assets/day3/pic/water.png",
  audio:"assets/day3/audio/water.mp3"
  }
  ],
  
  
  // ---------- DAY 4 ----------
  4: [
    { han:"買", py:"mǎi", en:"buy",
      sentence_han:"我要去買東西。",
      sentence_py:"Wǒ yào qù mǎi dōngxi.",
      sentence_en:"I'm going to buy some things.",
      img:"assets/day4/pic/buy.png",
      audio:"assets/day4/audio/buy.mp3"
    },
    { han:"走路", py:"zǒu lù", en:"walk",
      sentence_han:"我每天走路上班。",
      sentence_py:"Wǒ měitiān zǒulù shàngbān.",
      sentence_en:"I walk to work every day.",
      img:"assets/day4/pic/walk.png",
      audio:"assets/day4/audio/walk.mp3"
    },
    { han:"來", py:"lái", en:"come",
      sentence_han:"你可以過來嗎？",
      sentence_py:"Nǐ kěyǐ guòlái ma?",
      sentence_en:"Can you come over?",
      img:"assets/day4/pic/come.png",
      audio:"assets/day4/audio/come.mp3"
    },
    { han:"喝", py:"hē", en:"drink",
      sentence_han:"你想喝什麼？",
      sentence_py:"Nǐ xiǎng hē shénme?",
      sentence_en:"What do you want to drink?",
      img:"assets/day4/pic/drink.png",
      audio:"assets/day4/audio/drink.mp3"
    },
    { han:"甜點", py:"tián diǎn", en:"dessert",
      sentence_han:"我們吃點甜點吧。",
      sentence_py:"Wǒmen chī diǎn tiándiǎn ba.",
      sentence_en:"Let's have some dessert.",
      img:"assets/day4/pic/dessert.png",
      audio:"assets/day4/audio/dessert.mp3"
    },
    { han:"去", py:"qù", en:"go",
      sentence_han:"我們走吧，該去了。",
      sentence_py:"Wǒmen zǒu ba, gāi qù le.",
      sentence_en:"Let's go, it's time.",
      img:"assets/day4/pic/go.png",
      audio:"assets/day4/audio/go.mp3"
    },
    { han:"吃", py:"chī", en:"eat",
      sentence_han:"你吃飽了嗎？",
      sentence_py:"Nǐ chībǎo le ma?",
      sentence_en:"Have you eaten enough?",
      img:"assets/day4/pic/eat.png",
      audio:"assets/day4/audio/eat.mp3"
    },
    { han:"啤酒", py:"pí jiǔ", en:"beer",
      sentence_han:"給我一杯啤酒。",
      sentence_py:"Gěi wǒ yì bēi píjiǔ.",
      sentence_en:"Give me a beer.",
      img:"assets/day4/pic/beer.png",
      audio:"assets/day4/audio/beer.mp3"
    },
    { han:"牛奶", py:"niú nǎi", en:"milk",
      sentence_han:"我早上喝一杯牛奶。",
      sentence_py:"Wǒ zǎoshang hē yì bēi niúnǎi.",
      sentence_en:"I drink a glass of milk in the morning.",
      img:"assets/day4/pic/milk.png",
      audio:"assets/day4/audio/milk.mp3"
    },
    { han:"麵包", py:"miàn bāo", en:"bread",
      sentence_han:"這家的麵包很新鮮。",
      sentence_py:"Zhè jiā de miànbāo hěn xīnxiān.",
      sentence_en:"This shop's bread is very fresh.",
      img:"assets/day4/pic/bread.png",
      audio:"assets/day4/audio/bread.mp3"
    }
  ],

  // ---------- DAY 5 ----------
 5: [
  { han:"家", py:"jiā", en:"home",
    sentence_han:"我要回家了。",
    sentence_py:"Wǒ yào huí jiā le.",
    sentence_en:"I'm going home.",
    img:"assets/day5/pic/home.png",
    audio:"assets/day5/audio/home.mp3"
  },
  { han:"休息", py:"xiū xí", en:"rest",
    sentence_han:"你今天需要休息。",
    sentence_py:"Nǐ jīntiān xūyào xiūxí.",
    sentence_en:"You need to rest today.",
    img:"assets/day5/pic/rest.png",
    audio:"assets/day5/audio/rest.mp3"
  },
  { han:"工作", py:"gōng zuò", en:"work",
    sentence_han:"我明天要工作。",
    sentence_py:"Wǒ míngtiān yào gōngzuò.",
    sentence_en:"I have to work tomorrow.",
    img:"assets/day5/pic/work.png",
    audio:"assets/day5/audio/work.mp3"
  },
  { han:"說", py:"shuō", en:"speak",
    sentence_han:"你剛剛說什麼？",
    sentence_py:"Nǐ gānggāng shuō shénme?",
    sentence_en:"What did you just say?",
    img:"assets/day5/pic/say.png",
    audio:"assets/day5/audio/say.mp3"
  },
  { han:"知道", py:"zhī dào", en:"know",
    sentence_han:"我不知道答案。",
    sentence_py:"Wǒ bù zhīdào dá'àn.",
    sentence_en:"I don't know the answer.",
    img:"assets/day5/pic/know.png",
    audio:"assets/day5/audio/know.mp3"
  },
  { han:"看到", py:"kàn dào", en:"see",
    sentence_han:"我看到你了。",
    sentence_py:"Wǒ kàndào nǐ le.",
    sentence_en:"I see you.",
    img:"assets/day5/pic/see.png",
    audio:"assets/day5/audio/see.mp3"
  },
  { han:"有", py:"yǒu", en:"have",
    sentence_han:"你有時間嗎？",
    sentence_py:"Nǐ yǒu shíjiān ma?",
    sentence_en:"Do you have time?",
    img:"assets/day5/pic/have.png",
    audio:"assets/day5/audio/have.mp3"
  },
  { han:"睡覺", py:"shuì jiào", en:"sleep",
    sentence_han:"我很累，想睡覺了。",
    sentence_py:"Wǒ hěn lèi, xiǎng shuìjiào le.",
    sentence_en:"I'm tired, I want to sleep.",
    img:"assets/day5/pic/sleep.png",
    audio:"assets/day5/audio/sleep.mp3"
  },
  { han:"想要", py:"xiǎng yào", en:"want",
    sentence_han:"我想要一杯水。",
    sentence_py:"Wǒ xiǎng yào yì bēi shuǐ.",
    sentence_en:"I want a glass of water.",
    img:"assets/day5/pic/want.png",
    audio:"assets/day5/audio/want.mp3"
  },
  { han:"賣", py:"mài", en:"sell",
    sentence_han:"這家店賣什麼？",
    sentence_py:"Zhè jiā diàn mài shénme?",
    sentence_en:"What does this shop sell?",
    img:"assets/day5/pic/sell.png",
    audio:"assets/day5/audio/sell.mp3"
  }
],
  
  
  // ---------- DAY 6 ----------
  6: [
    {
    han:"公車", py:"gōng chē", en:"bus",
    sentence_han:"公車快來了。",
    sentence_py:"Gōngchē kuài lái le.",
    sentence_en:"The bus is coming soon.",
    img:"assets/day6/pic/bus.png",
    audio:"assets/day6/audio/bus.mp3"
    },
    {
    han:"火車站", py:"huǒ chē zhàn", en:"train station",
    sentence_han:"火車站離這裡很近。",
    sentence_py:"Huǒchēzhàn lí zhèlǐ hěn jìn.",
    sentence_en:"The train station is close to here.",
    img:"assets/day6/pic/train-station.png",
    audio:"assets/day6/audio/train-station.mp3"
    },
    {
    han:"機場", py:"jī chǎng", en:"airport",
    sentence_han:"我們去機場吧。",
    sentence_py:"Wǒmen qù jīchǎng ba.",
    sentence_en:"Let's go to the airport.",
    img:"assets/day6/pic/airport.png",
    audio:"assets/day6/audio/airport.mp3"
    },
    {
    han:"便利商店", py:"biàn lì shāng diàn", en:"convenience store",
    sentence_han:"我去便利商店買東西。",
    sentence_py:"Wǒ qù biànlì shāngdiàn mǎi dōngxi.",
    sentence_en:"I'm going to the convenience store.",
    img:"assets/day6/pic/convenience-store.png",
    audio:"assets/day6/audio/convenience-store.mp3"
    },
    {
    han:"餐廳", py:"cān tīng", en:"restaurant",
    sentence_han:"這家餐廳很好吃。",
    sentence_py:"Zhè jiā cāntīng hěn hǎochī.",
    sentence_en:"This restaurant is delicious.",
    img:"assets/day6/pic/restaurant.png",
    audio:"assets/day6/audio/restaurant.mp3"
    },
    {
    han:"夜市", py:"yè shì", en:"night market",
    sentence_han:"我們去夜市吃東西吧。",
    sentence_py:"Wǒmen qù yèshì chī dōngxi ba.",
    sentence_en:"Let's go eat at the night market.",
    img:"assets/day6/pic/night-market.png",
    audio:"assets/day6/audio/nightmarket.mp3"
    },
    {
    han:"飯店", py:"fàn diàn", en:"hotel",
    sentence_han:"我們住在這家飯店。",
    sentence_py:"Wǒmen zhù zài zhè jiā fàndiàn.",
    sentence_en:"We're staying at this hotel.",
    img:"assets/day6/pic/hotel.png",
    audio:"assets/day6/audio/hotel.mp3"
    },
    {
    han:"醫院", py:"yī yuàn", en:"hospital",
    sentence_han:"他在醫院工作。",
    sentence_py:"Tā zài yīyuàn gōngzuò.",
    sentence_en:"He works at the hospital.",
    img:"assets/day6/pic/hospital.png",
    audio:"assets/day6/audio/hospital.mp3"
    },
    {
    han:"學校", py:"xué xiào", en:"school",
    sentence_han:"我的小孩在學校。",
    sentence_py:"Wǒ de xiǎohái zài xuéxiào.",
    sentence_en:"My kid is at school.",
    img:"assets/day6/pic/school.png",
    audio:"assets/day6/audio/school.mp3"
    },
    {
    han:"廁所", py:"cè suǒ", en:"bathroom",
    sentence_han:"請問廁所在哪裡？",
    sentence_py:"Qǐngwèn cèsuǒ zài nǎlǐ?",
    sentence_en:"Excuse me, where's the bathroom?",
    img:"assets/day6/pic/bathroom.png",
    audio:"assets/day6/audio/bathroom.mp3"
    }
    ],
  
  
  // ---------- DAY 7 ----------
  7: [
    {
      han:"早上", py:"zǎo shang", en:"morning",
      sentence_han:"我早上七點起床。",
      sentence_py:"Wǒ zǎoshang qī diǎn qǐchuáng.",
      sentence_en:"I wake up at seven in the morning.",
      img:"assets/day7/pic/morning.png",
      audio:"assets/day7/audio/morning.mp3"
    },
    {
      han:"晚上", py:"wǎn shang", en:"evening",
      sentence_han:"我們晚上見。",
      sentence_py:"Wǒmen wǎnshang jiàn.",
      sentence_en:"See you in the evening.",
      img:"assets/day7/pic/evening.png",
      audio:"assets/day7/audio/evening.mp3"
    },
    {
      han:"現在", py:"xiàn zài", en:"now",
      sentence_han:"我們現在出發吧。",
      sentence_py:"Wǒmen xiànzài chūfā ba.",
      sentence_en:"Let's leave now.",
      img:"assets/day7/pic/now.png",
      audio:"assets/day7/audio/now.mp3"
    },
    {
      han:"今天", py:"jīn tiān", en:"today",
      sentence_han:"今天是星期幾？",
      sentence_py:"Jīntiān shì xīngqí jǐ?",
      sentence_en:"What day is today?",
      img:"assets/day7/pic/today.png",
      audio:"assets/day7/audio/today.mp3"
    },
    {
      han:"明天", py:"míng tiān", en:"tomorrow",
      sentence_han:"明天見。",
      sentence_py:"Míngtiān jiàn.",
      sentence_en:"See you tomorrow.",
      img:"assets/day7/pic/tomorrow.png",
      audio:"assets/day7/audio/tomorrow.mp3"
    },
    {
      han:"昨天", py:"zuó tiān", en:"yesterday",
      sentence_han:"昨天天氣很好。",
      sentence_py:"Zuótiān tiānqì hěn hǎo.",
      sentence_en:"The weather was nice yesterday.",
      img:"assets/day7/pic/yesterday.png",
      audio:"assets/day7/audio/yesterday.mp3"
    },
    {
      han:"火車", py:"huǒ chē", en:"train",
      sentence_han:"火車快到了。",
      sentence_py:"Huǒchē kuài dào le.",
      sentence_en:"The train is arriving soon.",
      img:"assets/day7/pic/train.png",
      audio:"assets/day7/audio/train.mp3"
    },
    {
      han:"高鐵", py:"gāo tiě", en:"high-speed rail",
      sentence_han:"我們搭高鐵去台中。",
      sentence_py:"Wǒmen dā gāotiě qù Táizhōng.",
      sentence_en:"We are taking the HSR to Taichung.",
      img:"assets/day7/pic/high-speed-rail.png",
      audio:"assets/day7/audio/high-speed-rail.mp3"
    },
    {
      han:"計程車", py:"jì chéng chē", en:"taxi",
      sentence_han:"我們搭計程車去吧。",
      sentence_py:"Wǒmen dā jìchéngchē qù ba.",
      sentence_en:"Let's take a taxi.",
      img:"assets/day7/pic/taxi.png",
      audio:"assets/day7/audio/taxi.mp3"
    },
    {
      han:"捷運", py:"jié yùn", en:"MRT",
      sentence_han:"捷運站在前面。",
      sentence_py:"Jiéyùn zhàn zài qiánmiàn.",
      sentence_en:"The MRT station is ahead.",
      img:"assets/day7/pic/mrt.png",
      audio:"assets/day7/audio/mrt.mp3"
    }
  ]
};
  
// ==========================
// FUNCTIONS
// ==========================
function renderDays() {
  daysContainer.innerHTML = "";
  Object.keys(DATA).forEach((d) => {
    const pill = document.createElement("div");
    pill.className = "day-pill";
    if (parseInt(d) === day) pill.classList.add("active");

    pill.innerHTML = `<span>${d}</span>`;
    pill.onclick = () => {
      day = parseInt(d);
      index = 0;
      renderDays();
      loadCard();
    };

    daysContainer.appendChild(pill);
  });
}

function loadCard() {
  const current = DATA[day][index];

  wordTitle.innerText = current.en;
  cardImg.src = current.img;

  han.innerText = current.han;
  py.innerText = current.py;
  en.innerText = current.en;

  sentenceHan.innerText = current.sentence_han;
  sentencePy.innerText = current.sentence_py;
  sentenceEn.innerText = current.sentence_en;

  infoText.innerText = `${DATA[day].length - index - 1} CARDS LEFT · CHAPTER 0${day}`;

  card.classList.remove("flipped");

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === DATA[day].length - 1;
}

// ==========================
// EVENTS
// ==========================
card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

nextBtn.onclick = () => {
  if (index < DATA[day].length - 1) {
    index++;
    loadCard();
  }
};

prevBtn.onclick = () => {
  if (index > 0) {
    index--;
    loadCard();
  }
};

nextDayBtn.onclick = () => {
  if (day < Object.keys(DATA).length) {
    day++;
    index = 0;
    renderDays();
    loadCard();
  }
};

// AUDIO
audioBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const current = DATA[day][index];
  new Audio(current.audio).play();
});

// INIT
renderDays();
loadCard();