const playlist = [
    // https://hdlost.com/?q=o+aaye+tere+bhawan
    // https://pagalworldmusic.com/
    {
        title: "Sample Song 1",
        artist: "Artist 1",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        image: "https://picsum.photos/300/300?random=1",
        category: "english sad pop"
    },
    {
        title: "Sample Song 2",
        artist: "Artist 2",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        image: "https://picsum.photos/300/300?random=2",
        category: "english happy pop"
    },
    {
        title: "Sample Song 3",
        artist: "Artist 3",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        image: "https://picsum.photos/300/300?random=3",
        category: "nepali sad pop"
    },
    {
        title: "I Guess I m In Love",
        artist: "Clinton Kane",
        category: "romantic english",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/clinton-kane-i-guess-i-m-in-love.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Clinton%20Kane%20I%20Guess%20I'm%20In%20Love.mp3"
    },
    {
        title: "My Baby Love",
        artist: "Jony",
        category: "romantic english",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/my%20baby%20love.avif",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/My-Baby-Love.mp3"
    },
    {
        title: "Gasolina",
        artist: "Daddy Yankee",
        category: "bass attitude english",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/gasolina.avif",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Gasolina.mp3"
        //   src: "https://www.jiosaavn.com/song/gasolina/RAAjZENnT0s"
    },
    {
        title: "Heeriye Heeriye Aa",
        artist: "Arijit Singh",
        category: "romantic hindi",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Heeriye%20heeriye%20aa%20aa.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Heeriye%20heeriye%20aa%20aa.mp3"
    },
    {
        title: "Calm Down",
        artist: "Rema",
        category: "english",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Rema-Selena-Gomez-Calm-Down.webp",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Rema%20Calm%20Down.mp3"
    },
    {
        title: "Taki Taki",
        artist: "DJ Snake, Selena Gomez",
        category: "bass english",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/taki%20taki.avif",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Taki-Taki.mp3"
    },
    {
        title: "Let Me Love You",
        artist: "Justin Bieber",
        category: "romantic english",
        image: "https://picsum.photos/300/300?random=8",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Let-Me-Love-You.mp3"
    },
    {
        title: "Baby",
        artist: "Justin Bieber",
        category: "romantic english",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/baby.avif",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Baby.mp3"
    },
    {
        title: "Despacito",
        artist: "Daddy Yankee, Luis Fonsi",
        category: "bass english",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/despacito.avif",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Despacito.mp3"
    },
    {
        title: "Sorry",
        artist: "Justin Bieber",
        category: "sad english",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/sorry.avif",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Sorry.mp3"
    },
    {
        title: "Water",
        artist: "Tyla",
        category: "english",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/water.avif",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Oberdmusic%20Tyla%20Water%20Kompa%20Version.mp3"
    },
    {
        title: "Sawarne Lage",
        artist: "Jubin Nautiyal",
        category: "bass hiphop hindi",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/sawarne%20lage.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Sawarne%20Lage%20(LYRICS)%20-%20Jubin%20Nautiyal.mp3"
    },
    {
        title: "Malang Sajna",
        artist: "Parampara Tandon",
        category: "bass hiphop hindi",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/malang%20sajna.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Sachet%20Tandon%20Malang%20Sajna%20Ft%20Parampara%20Tandon.mp3"
    },
    {
        title: "Sajde - Kill Dil",
        artist: "Arijit Singh, Nihira, Gulzar",
        category: "sad hindi",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/sajde.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Arijit%20Singh%20Sajde%20Ft%20Nihira%20Joshi%20Deshpande%20.mp3"
    },
    // {
    //     title: "Mere Liye - Broken but Beautiful*",
    //     artist: "Akhil Sachdeva",
    //     category: "sad hindi",
    //     image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_1140277330.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Broken%20but%20Beautiful%20Season%203/Mere%20Liye%20-%20Broken%20but%20Beautiful%20Season%203%20128%20Kbps.mp3"
    //     // src: "https://pagalsong.com.in/download/52905/Mere%20Liye%20320%20KBPS%20mp3"
    // },
    {
        title: "Dil Jaaniye",
        artist: "Tulsi Kumar, Jubin Nautiyal",
        category: "sad hindi",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/dil%20jaaniye.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Dil%20Janiya%20downnload.mp3"
    },
    {
        title: "Jitni Dafa - Parmanu",
        artist: "Yasser Desai",
        category: "sad hindi",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/jitni%20dafa.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Yasser%20Desai%20Jitni%20Dafa%20Ft%20Jeet%20Gannguli.mp3"
    },
    {
        title: "Hum Mar Jayenge - Aashiqui 2",
        artist: "Tulsi Kumar, Arijit Singh",
        category: "sad romantic hiphop hindi",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/ham%20mar%20jayenge.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Hum%20Mar%20Jayenge%20downnload.mp3"
    },
    {
        title: "Humdard - Ek Villain",
        artist: "Mithoon, Arijit Singh",
        category: "sad romantic hindi",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/humdard.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Humdard%20downnload.mp3"
    },
    {
        title: "Tujhe Kitna Chahne Lage",
        artist: "Mithoon, Arijit Singh",
        category: "sad romantic hindi",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Tujhe%20Kitna%20Chahne%20Lage%20Hum.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Tujhe%20Kitna%20Chahne%20Lage%20Hum.mp3"
    },
    {
        title: "Ek Tarfa",
        artist: "Darshan Raval",
        category: "bass sad hindi",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Ek%20Tarfa.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Ek%20Tarfa.mp3"
    },
    {
        title: "Besharam Rang - Pathaan",
        artist: "Vishal Shekhar, Shilpa Rao",
        category: "bass hiphop hindi",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Besharam%20Rang.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Besharam%20Rang.mp3"
    },
    {
        title: "Barbaadiyan - Shiddat",
        artist: "Sachet Tandon, Nikhita Gandhi",
        category: "bass hiphop hindi",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Barbadiyan.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Barbadiyan.mp3"
    },
    {
        title: "Bandeya - Dil Juunglee",
        artist: "Arijit Singh",
        category: "sad hindi",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Bandeya.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Bandeya.mp3"
    },
    {
        title: "Akhiyaan Milavanga - Commando 3",
        artist: "Arijit Singh, Sruthy Sasidharan",
        category: "bass hiphop hindi",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Akhiyaan%20Milavanga%20Arijit%20Singh.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Akhiyaan%20Milavanga%20Arijit%20Singh.mp3"
    },
    {
        title: "Roi Na Je yaad Meri Aayi Ve",
        artist: "Ninja",
        category: "sad hindi punjabi",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/roi%20na.avif",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Roi%20Na.mp3"
    },
    {
        title: "Mujhko Yaad Sataye Teri - Phir Hera Pheri",
        artist: "Himesh Reshammiya",
        category: "hindi hiphop",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Mujhko%20Yaad%20Sataye%20Teri.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Mujhko%20Yaad%20Sataye%20Teri.mp3"
    },
    {
        title: "Hookah Bar - Khiladi 786",
        artist: "Himesh Reshammiya, Vineet Singh",
        category: "hindi hiphop",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Hookah%20Bar.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Hookah%20Bar.mp3"
    },
    {
        title: "Khaab",
        artist: "Akhil",
        category: "sad punjabi hindi",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Khaab%20Song.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Khaab%20Song.mp3"
    },
    {
        title: "Kiya Kiya - Welcome",
        artist: "Anand Raj Anand, Shweta Pandit",
        category: "hindi hiphop",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Kiya%20Kiya.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Kiya%20Kiya.mp3"
    },
    {
        title: "Sadi Gali - Tanu Weds Manu",
        artist: "Lehmber Hussainpuri",
        category: "hindi punjabi hiphop",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Sadi%20Gali.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Sadi%20Gali.mp3"
    },
    {
        title: "Brown Rang - International Villager",
        artist: "Yo Yo Honey Singh",
        category: "hindi hiphop attitude",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Brown%20Rang.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Brown%20Rang.mp3"
    },
    {
        title: "Sunny Sunny - Yaariyan",
        artist: "Yo Yo Honey Singh, Neha Kakkar",
        category: "hindi hiphop",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Sunny%20Sunny.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Sunny%20Sunny.mp3"
    },
    {
        title: "Blue Eyes",
        artist: "Yo Yo Honey Singh",
        category: "hindi hiphop",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Blue%20Eyes.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Blue%20Eyes.mp3"
    },
    {
        title: "Baby Doll",
        artist: "Meet Bros, Kanika Kapoor",
        category: "hindi hiphop",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Baby%20Doll.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Baby%20Doll.mp3"
    },
    // {
    //     title: "Tu Cheez Badi Hai Mast Mast*",
    //     artist: "Udit Narayan, Neha Kakkar",
    //     category: "hindi hiphop",
    //     image: "",
    //     src: ""
    // },
    {
        title: "Sakhiyaan",
        artist: "Maninder Buttar",
        category: "hindi punjabi hiphop romantic",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Sakhiyaan.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Sakhiyaan.mp3"
    },
    {
        title: "Saiyaara - Ek Tha Tiger",
        artist: "Mohit Chauhan, Tarannum Mallik",
        category: "hindi sad",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Saiyaara.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Saiyaara.mp3"
    },
    {
        title: "Aankhon Mein Teri Ajab Si",
        artist: "K.K.",
        category: "hindi romantic",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Aankhon%20Mein%20Teri.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Aankhon%20Mein%20Teri.mp3"
    },
    {
        title: "High Heels - Ki & Ka",
        artist: "Yo Yo Honey Singh, Meet Bros",
        category: "hindi hiphop",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/High%20Heels.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/High%20Heels.mp3"
    },
    {
        title: "Lat Lag Gayee - Race 2",
        artist: "Benny Dayal, Shalmali Kholgade",
        category: "hindi hiphop",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Lat%20Lag%20Gayi.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Lat%20Lag%20Gayi.mp3"
    },
    {
        title: "But Slowly Slowly",
        artist: "Rekha Thapa",
        category: "nepali hiphop",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/but%20slowly%20slowly.avif",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/But-Slowly-Slowly.mp3"
    },
    {
        title: "Kasari Bhanu",
        artist: "Swoopna Suman",
        category: "nepali sad",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/kasari%20bhanu.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Kasari-Bhanu.mp3"
    },
    {
        title: "Maya",
        artist: "Ashutosh KC",
        category: "nepali sad",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/maya.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Maya.mp3"
    },
    {
        title: "Maya1",
        artist: "Ashutosh KC",
        category: "nepali sad",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Maya1.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Maya.mp3"
    },
    {
        title: "Dharti Gagan",
        artist: "Sonu Nigam, Anuradha Paudwal",
        category: "hindi bhakti",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Dharti%20Gagan%20Mein%20Hoti%20Hai.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Dharti%20Gagan%20Mein%20Hoti%20Hai.mp3"
    },
    {
        title: "O Aaye Tere Bhawan*",
        artist: "Sonu Nigam, Anuradha Paudwal",
        category: "Hindi bhakti",
        image: "https://pagalworldmusic.com/downloads/cover/379112/379112.jpg",
        src: "https://pagalworldmusic.com/download.php?title=O+Aaye+Tere+Bhawan-128kbps&path=downloads%2Fmedium%2FLxgSBjdhWHQ%2FLxgSBjdhWHQ.mp3"
    },
    {
        title: "Pyara Saja Hai Tera Dwar",
        artist: "Lakhbir Singh Lakkha",
        category: "Hindi bhakti",
        image: "https://pagalworldmusic.com/downloads/cover/85017/85017.jpg",
        src: "https://pagalworldmusic.com/download.php?title=Pyara+Saja+Hai+Tera+Dwar+%28From+Pyara+Saja+Hai+Tera+Dwar+Bhawani%29-128kbps&path=downloads%2Fmedium%2FQzgpczFXRAU%2FQzgpczFXRAU.mp3"
    },
    {
        title: "Hanuman Chalisa",
        artist: "Gulshan Kumar",
        category: "Bhakti hindi",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/hanuman%20chalisha.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Hanuman-Chalisa.mp3"
    },
    {
        title: "Tujhe Kab Se Pukare",
        artist: "Sonu Nigam, Anuradha Paudwal",
        category: "hindi bhakti",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Tujhe%20Kab%20Se%20Pukare%20Tera%20Lal.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Tujhe%20Kab%20Se%20Pukare%20Tera%20Lal.mp3"
    },
    // {
    //     title: "Leke Pooja Ki Thali*",
    //     artist: "Sonu Nigam, Anuradha Paudwal",
    //     category: "hindi bhakti",
    //     image: "https://image.youtube.com/vi/W7_C58BskdM/maxresdefault.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Jai%20Maa%20Vaishno%20Devi/Leke%20Pooja%20Ki%20Thali%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Maa Tu Mujhe Darshan De*",
    //     artist: "Sonu Nigam, Anuradha Paudwal",
    //     category: "hindi bhakti",
    //     image: "https://image.youtube.com/vi/cLxff7epOb8/maxresdefault.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Jai%20Maa%20Vaishno%20Devi/Mere%20Nainau%20Ki%20Pyas%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Man Mera Mandir*",
    //     artist: "Sameer Sen, nuradha Paudwal",
    //     category: "hindi bhakti",
    //     image: "https://image.youtube.com/vi/S6HFRZmZrTI/maxresdefault.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Shiv%20Aaradhna/Man%20Mera%20Mandir,Shiv%20Meri%20Puja%20-%20Shiv%20Aaradhna%20128%20Kbps.mp3"
    // },
    {
        title: "Shiv Shankar Ko Jisne Puja",
        artist: "Sameer Sen, nuradha Paudwal",
        category: "hindi bhakti",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Shiv%20Shankar%20Ko%20Jisne%20Puja.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Shiv%20Shankar%20Ko%20Jisne%20Puja.mp3"
    },
    {
        title: "Chalo Shiv Shankar Ke Mandir*",
        artist: "Sameer Sen, Anuradha Paudwal",
        category: "hindi bhakti",
        image: "https://pagalworldmusic.com/downloads/cover/316032/316032.jpg",
        src: "https://pagalworldmusic.com/download.php?title=Chalo+Shiv+Shankar+Ke+Mandir+Mein-128kbps&path=downloads%2Fmedium%2FPVwlVVlWVEk%2FPVwlVVlWVEk.mp3"
    },
    {
        title: "Kabhi-Pyase-Ko-Pani-Pilaya-Nahi",
        artist: "Kumar Vishu",
        category: "hindi bhakti",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/kabhi%20pyase%20ko%20pani%20pilaya%20nahi.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Kabhi-Pyase-Ko-Pani-Pilaya-Nahi.mp3"
    },
    {
        title: "Shiv Tandav Stotram",
        artist: "Shankar Mahadevan",
        category: "hindi bhakti",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Shiv%20Tandav%20Stotram.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Shiv%20Tandav%20Stotram.mp3"
    },
    {
        title: "Har Har Shambhu Shiv Mahadeva",
        artist: "Jeetu Sharma",
        category: "hindi bhakti",
        image: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Har%20Har%20Shambhu%20Shiv%20Mahadeva.jpg",
        src: "https://github.com/bibekchandsah/files/raw/main/trash/bin/download/music/Har%20Har%20Shambhu%20Shiv%20Mahadeva.mp3"
    },
    // {
    //   title: "",
    //   artist: "",
    //   category: "",
    //   image: "",
    //   src: ""
    // },
    // ... (add more entries with image and music URLs)
]; 