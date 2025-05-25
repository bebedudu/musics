const playlist = [
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
    // {
    //     title: "I Guess I m In Love",
    //     artist: "Clinton Kane",
    //     category: "romantic english",
    //     image: "https://picsum.photos/300/300?random=4",
    //     src: "https://files.gospeljingle.com/uploads/music/2023/01/Clinton_Kane_-_I_Guess_Im_In_Love.mp3"
    // },
    {
        title: "My Baby Love",
        artist: "Jony",
        category: "romantic english",
        image: "https://picsum.photos/300/300?random=5",
        // src: "https://ww-pagalworld.com/files/download/id/6851"
        src: "https://github.com/bibekchandsah/Music/raw/main/Music/My-Baby-Love.mp3"
    },
    {
        title: "Gasolina",
        artist: "Daddy Yankee",
        category: "bass attitude english",
        image: "https://picsum.photos/300/300?random=6",
        src: "https://github.com/bibekchandsah/Music/raw/main/Music/Gasolina.mp3"
        //   src: "https://www.jiosaavn.com/song/gasolina/RAAjZENnT0s"
    },
    // {
    //     title: "Heeriye Heeriye Aa",
    //     artist: "Arijit Singh",
    //     category: "romantic hindi",
    //     image: "https://ww-pagalworld.com/uploads/thumb/sft27/13270_4.jpg",
    //     src: "https://files.gospeljingle.com/uploads/music/2023/10/Heeriye-feat-Arijit-Singh-Jasleen-Royal-(Gospeljingle.com).mp3"
    // },
    // {
    //     title: "Calm Down",
    //     artist: "Rema",
    //     category: "english",
    //     image: "https://ww-pagalworld.com/uploads/thumb/sft26/12678_4.jpg",
    //     src: "https://cdn.xclusiveloaded.com/wp-content/uploads/2022/08/Rema_Ft_Selena_Gomez_-_Calm_Down_Remix_Audio_.mp3"
    // },
    {
        title: "Taki Taki",
        artist: "DJ Snake, Selena Gomez",
        category: "bass english",
        image: "https://picsum.photos/300/300?random=7",
        src: "https://github.com/bibekchandsah/Music/raw/main/Music/Taki-Taki.mp3"
    },
    {
        title: "Let Me Love You",
        artist: "Justin Bieber",
        category: "romantic english",
        image: "https://picsum.photos/300/300?random=8",
        src: "https://github.com/bibekchandsah/Music/raw/main/Music/Let-Me-Love-You.mp3"
    },
    {
        title: "Baby",
        artist: "Justin Bieber",
        category: "romantic english",
        image: "https://picsum.photos/300/300?random=9",
        src: "https://github.com/bibekchandsah/Music/raw/main/Music/Baby.mp3"
    },
    {
        title: "Despacito",
        artist: "Daddy Yankee, Luis Fonsi",
        category: "bass english",
        image: "https://picsum.photos/300/300?random=10",
        src: "https://github.com/bibekchandsah/Music/raw/main/Music/Despacito.mp3"
    },
    {
        title: "Sorry",
        artist: "Justin Bieber",
        category: "sad english",
        image: "https://picsum.photos/300/300?random=11",
        src: "https://github.com/bibekchandsah/Music/raw/main/Music/Sorry.mp3"
    },
    // {
    //     title: "Water",
    //     artist: "Tyla",
    //     category: "english",
    //     image: "https://i0.wp.com/justnaija.com/uploads/2023/07/Tyla-Water-artwork.jpeg?ulb=false&ssl=1&resize=320,350",
    //     src: "https://cdn3.justnaija.me/uploads/music/2023/07/Tyla-Water-(JustNaija.com).mp3"
    // },
    // {
    //     title: "Sawarne Lage",
    //     artist: "Jubin Nautiyal",
    //     category: "bass hiphop hindi",
    //     image: "https://pagalworlld.com/siteuploads/thumb/sft15/7472_4.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Mitron/Sawarne%20Lage%20(Mitron)%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Malang Sajna",
    //     artist: "Parampara Tandon",
    //     category: "bass hiphop hindi",
    //     image: "https://i.ytimage.com/vi/-T1lDt7ttro/maxresdefault.jpg",
    //     // image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_782231041.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Malang%20Sajna%20-%20Sachet%20Tandon/Malang%20Sajna%20-%20Sachet%20Tandon%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Sajde - Kill Dil",
    //     artist: "Arijit Singh, Nihira, Gulzar",
    //     category: "sad hindi",
    //     image: "https://i.ytimage.com/vi/P4fzOSVy6-o/maxresdefault.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Kill%20Dil/Sajde%20-%20Kill%20Dil%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Mere Liye - Broken but Beautiful",
    //     artist: "Akhil Sachdeva",
    //     category: "sad hindi",
    //     image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_1140277330.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Broken%20but%20Beautiful%20Season%203/Mere%20Liye%20-%20Broken%20but%20Beautiful%20Season%203%20128%20Kbps.mp3"
    //     // src: "https://pagalsong.com.in/download/52905/Mere%20Liye%20320%20KBPS%20mp3"
    // },
    // {
    //     title: "Dil Jaaniye",
    //     artist: "Tulsi Kumar, Jubin Nautiyal",
    //     category: "sad hindi",
    //     image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_795589986.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Khandaani%20Shafakhana/Dil%20Jaaniye%20-%20Khandaani%20Shafakhana%20128%20Kbps.mp3",
    //     // src: "https://pagalsong.com.in/download/10200/Dil%20Jaaniye%20320%20KBPS%20mp3"
    // },
    // {
    //     title: "Jitni Dafa - Parmanu",
    //     artist: "Yasser Desai",
    //     category: "sad hindi",
    //     image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_787724045.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Parmanu/Jitni%20Dafa%20(Parmanu%20-%20The%20Story%20Of%20Pokhran)%20128%20Kbps.mp3",
    //     // src: "https://pagalsong.com.in/download/1540/Jitni%20Dafa%20320%20KBPS%20mp3"
    // },
    // {
    //     title: "Hum Mar Jayenge - Aashiqui 2",
    //     artist: "Tulsi Kumar, Arijit Singh",
    //     category: "sad romantic hiphop hindi",
    //     image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_872050244.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Aashiqui%202/Hum%20Mar%20Jayenge.mp3"
    // },
    // {
    //     title: "Humdard - Ek Villain",
    //     artist: "Mithoon, Arijit Singh",
    //     category: "sad romantic hindi",
    //     image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_1050342207.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Ek%20Villain/Humdard.mp3"
    // },
    // {
    //     title: "Tujhe Kitna Chahne Lage",
    //     artist: "Mithoon, Arijit Singh",
    //     category: "sad romantic hindi",
    //     image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_102009727.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Kabir%20Singh/Tujhe%20Kitna%20Chahne%20Lage%20-%20Kabir%20Singh%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Ek Tarfa",
    //     artist: "Darshan Raval",
    //     category: "bass sad hindi",
    //     image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_537500319.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Ek%20Tarfa%20-%20Darshan%20Raval/Ek%20Tarfa%20-%20Darshan%20Raval%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Besharam Rang - Pathaan",
    //     artist: "Vishal Shekhar, Shilpa Rao",
    //     category: "bass hiphop hindi",
    //     image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_1969274076.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Pathaan/Besharam%20Rang%20-%20Pathaan%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Barbaadiyan - Shiddat",
    //     artist: "Sachet Tandon, Nikhita Gandhi",
    //     category: "bass hiphop hindi",
    //     image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_915626579.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Shiddat/Barbaadiyan%20-%20Shiddat%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Bandeya - Dil Juunglee",
    //     artist: "Arijit Singh",
    //     category: "sad hindi",
    //     image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_643490699.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Dil%20Juunglee/Bandeya%20(Dil%20Juunglee)%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Akhiyaan Milavanga - Commando 3",
    //     artist: "Arijit Singh, Sruthy Sasidharan",
    //     category: "bass hiphop hindi",
    //     image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_25762861.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Commando%203/Akhiyaan%20Milavanga%20-%20Commando%203%20128%20Kbps.mp3"
    // },
    {
        title: "Roi Na Je yaad Meri Aayi Ve",
        artist: "Ninja",
        category: "sad hindi punjabi",
        image: "https://picsum.photos/300/300?random=12",
        src: "https://github.com/bibekchandsah/Music/raw/main/Music/Roi%20Na.mp3"
    },
    // {
    //     title: "Mujhko Yaad Sataye Teri - Phir Hera Pheri",
    //     artist: "Himesh Reshammiya",
    //     category: "hindi hiphop",
    //     image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_1056876323.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Phir%20Hera%20Pheri/Mujhko%20Yaad%20Sataye%20Teri%20-%20Phir%20Hera%20Pheri%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Hookah Bar - Khiladi 786",
    //     artist: "Himesh Reshammiya, Vineet Singh",
    //     category: "hindi hiphop",
    //     image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_627530666.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Khiladi%20786/Hookah%20Bar%20-%20Khiladi%20786%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Khaab",
    //     artist: "Akhil",
    //     category: "sad punjabi hindi",
    //     image: "https://image.youtube.com/vi/2eliQ_KR8yA/maxresdefault.jpg",
    //     src: "https://pagalworld.ink/files/download/type/320/id/9024"
    //     // https://pagalworld.ink/files/download/type/64/id/9024
    // },
    // {
    //     title: "Kiya Kiya - Welcome",
    //     artist: "Anand Raj Anand, Shweta Pandit",
    //     category: "hindi hiphop",
    //     image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_184312163.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Welcome/Kiya%20Kiya%20-%20Welcome%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Sadi Gali - Tanu Weds Manu",
    //     artist: "Lehmber Hussainpuri",
    //     category: "hindi punjabi hiphop",
    //     image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_236692627.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Tanu%20Weds%20Manu/Sadi%20Gali%20-%20Tanu%20Weds%20Manu%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Brown Rang - International Villager",
    //     artist: "Yo Yo Honey Singh",
    //     category: "hindi hiphop attitude",
    //     image: "https://image.youtube.com/vi/BYIDm2K8RJc/maxresdefault.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/International%20Villager/Brown%20Rang%20-%20International%20Villager%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Sunny Sunny - Yaariyan",
    //     artist: "Yo Yo Honey Singh, Neha Kakkar",
    //     category: "hindi hiphop",
    //     image: "https://i.ytimage.com/vi/MXJCnccDLA0/hqdefault.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Yaariyan/Sunny%20Sunny%20-%20Yaariyan%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Blue Eyes",
    //     artist: "Yo Yo Honey Singh",
    //     category: "hindi hiphop",
    //     image: "https://image.youtube.com/vi/NbyHNASFi6U/maxresdefault.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Blue%20Eyes%20-%20Yo%20Yo%20Honey%20Singh/Blue%20Eyes%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Baby Doll",
    //     artist: "Meet Bros, Kanika Kapoor",
    //     category: "hindi hiphop",
    //     image: "https://image.youtube.com/vi/yP9KiFTyBks/maxresdefault.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Ragini%20MMS%202/Baby%20Doll%20-%20Ragini%20MMS%202%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Tu Cheez Badi Hai Mast Mast",
    //     artist: "Udit Narayan, Neha Kakkar",
    //     category: "hindi hiphop",
    //     image: "https://pagalworlld.com/siteuploads/thumb/sft1/241_4.jpg",
    //     src: "https://pagalworlld.com/files/download/id/241"
    // },
    // {
    //     title: "Sakhiyaan",
    //     artist: "Maninder Buttar",
    //     category: "hindi punjabi hiphop romantic",
    //     image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_947457968.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Sakhiyaan%20%20-%20Maninder%20Buttar/Sakhiyaan%20-%20Maninder%20Buttar%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Saiyaara - Ek Tha Tiger",
    //     artist: "Mohit Chauhan, Tarannum Mallik",
    //     category: "hindi sad",
    //     image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_1809697404.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Ek%20Tha%20Tiger/Saiyaara.mp3"
    // },
    // {
    //     title: "Aankhon Mein Teri Ajab Si",
    //     artist: "K.K.",
    //     category: "hindi romantic",
    //     image: "https://image.youtube.com/vi/qSy6xPm_Tpo/maxresdefault.jpg",
    //     src: "https://paglasongs.com/files/download/id/14030"
    // },
    // {
    //     title: "High Heels - Ki & Ka",
    //     artist: "Yo Yo Honey Singh, Meet Bros",
    //     category: "hindi hiphop",
    //     image: "https://pagalsong.com.in/uploads//thumbnails/300x300/id3Picture_1320932489.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Ki%20&%20Ka/01%20-%20High%20Heels.mp3"
    // },
    // {
    //     title: "Lat Lag Gayee - Race 2",
    //     artist: "Benny Dayal, Shalmali Kholgade",
    //     category: "hindi hiphop",
    //     image: "https://image.youtube.com/vi/KxCjVIFxZNo/maxresdefault.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Race%202/Lat%20Lag%20Gayee%20-%20Race%202%20128%20Kbps.mp3"
    // },
    // {
    //     title: "But Slowly Slowly",
    //     artist: "Rekha Thapa",
    //     category: "nepali hiphop",
    //     image: "https://i.ytimage.com/vi/WgMffMxvVfs/0.jpg",
    //     src: "https://github.com/bibekchandsah/Music/raw/main/Music/But-Slowly-Slowly.mp3"
    // },
    // {
    //     title: "Kasari Bhanu",
    //     artist: "Swoopna Suman",
    //     category: "nepali sad",
    //     image: "https://image.youtube.com/vi/7SaM24Cjzj0/maxresdefault.jpg",
    //     src: "https://github.com/bibekchandsah/Music/raw/main/Music/Kasari-Bhanu.mp3"
    // },
    {
        title: "Maya",
        artist: "Ashutosh KC",
        category: "nepali sad",
        image: "https://picsum.photos/300/300?random=13",
        src: "https://github.com/bibekchandsah/bibeksha/raw/main/songs/music-2.mp3"
    },
    // {
    //     title: "Dharti Gagan",
    //     artist: "Sonu Nigam, Anuradha Paudwal",
    //     category: "hindi bhakti",
    //     image: "https://image.youtube.com/vi/cPD8h-Q11u8/maxresdefault.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Jai%20Maa%20Vaishno%20Devi/Dharti%20Gagan%20Mein%20Hoti%20Hai%20128%20Kbps.mp3"
    // },
    // {
    //     title: "O Aaye Tere Bhawan",
    //     artist: "Sonu Nigam, Anuradha Paudwal",
    //     category: "Hindi bhakti",
    //     image: "https://image.youtube.com/vi/l_vU6xIh9f8/maxresdefault.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Jai%20Maa%20Vaishno%20Devi/O%20Aaye%20Tere%20Bhawan%20128%20Kbps.mp3"
    // },
    {
        title: "Hanuman Chalisa",
        artist: "Gulshan Kumar",
        category: "Bhakti hindi",
        image: "https://picsum.photos/300/300?random=14",
        src: "https://github.com/bibekchandsah/Music/raw/main/Music/Hanuman-Chalisa.mp3"
    },
    // {
    //     title: "Tujhe Kab Se Pukare",
    //     artist: "Sonu Nigam, Anuradha Paudwal",
    //     category: "hindi bhakti",
    //     image: "https://image.youtube.com/vi/ObEt7q0VpvA/maxresdefault.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Jai%20Maa%20Vaishno%20Devi/Tujhe%20Kab%20Se%20Pukare%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Leke Pooja Ki Thali",
    //     artist: "Sonu Nigam, Anuradha Paudwal",
    //     category: "hindi bhakti",
    //     image: "https://image.youtube.com/vi/W7_C58BskdM/maxresdefault.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Jai%20Maa%20Vaishno%20Devi/Leke%20Pooja%20Ki%20Thali%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Maa Tu Mujhe Darshan De",
    //     artist: "Sonu Nigam, Anuradha Paudwal",
    //     category: "hindi bhakti",
    //     image: "https://image.youtube.com/vi/cLxff7epOb8/maxresdefault.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Jai%20Maa%20Vaishno%20Devi/Mere%20Nainau%20Ki%20Pyas%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Man Mera Mandir",
    //     artist: "Sameer Sen, nuradha Paudwal",
    //     category: "hindi bhakti",
    //     image: "https://image.youtube.com/vi/S6HFRZmZrTI/maxresdefault.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Shiv%20Aaradhna/Man%20Mera%20Mandir,Shiv%20Meri%20Puja%20-%20Shiv%20Aaradhna%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Shiv Shankar Ko Jisne Puja",
    //     artist: "Sameer Sen, nuradha Paudwal",
    //     category: "hindi bhakti",
    //     image: "https://image.youtube.com/vi/w7HbgKcQS_w/maxresdefault.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Shiv%20Aaradhna/Shiv%20Shankar%20Ko%20Jisne%20Puja%20-%20Shiv%20Aaradhna%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Chalo Shiv Shankar Ke Mandi",
    //     artist: "Sameer Sen, nuradha Paudwal",
    //     category: "hindi bhakti",
    //     image: "https://image.youtube.com/vi/jNFlndV30no/maxresdefault.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Shiv%20Aaradhna/Chalo%20Shiv%20Shankar%20Ke%20Mandir%20Mein%20-%20Shiv%20Aaradhna%20128%20Kbps.mp3"
    // },
    {
        title: "Kabhi-Pyase-Ko-Pani-Pilaya-Nahi",
        artist: "Kumar Vishu",
        category: "hindi bhakti",
        image: "https://picsum.photos/300/300?random=15",
        src: "https://github.com/bibekchandsah/Music/raw/main/Music/Kabhi-Pyase-Ko-Pani-Pilaya-Nahi.mp3"
    },
    // {
    //     title: "Shiv Tandav Stotram",
    //     artist: "Shankar Mahadevan",
    //     category: "hindi bhakti",
    //     image: "https://image.youtube.com/vi/2IlzAP9ibT0/maxresdefault.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Mahashivaraatri%20-%20Top%2010/Shiv%20Tandav%20Stotram%20-%20Mahashivaraatri%20-%20Top%2010%20128%20Kbps.mp3"
    // },
    // {
    //     title: "Har Har Shambhu Shiv Mahadeva",
    //     artist: "Jeetu Sharma",
    //     category: "hindi bhakti",
    //     image: "https://image.youtube.com/vi/A1Kgl2s6RKo/maxresdefault.jpg",
    //     src: "https://pagalsong.com.in/uploads/systemuploads/mp3/Har%20Har%20Shambhu%20Shiv%20Mahadeva/Har%20Har%20Shambhu%20Shiv%20Mahadeva%20-%20Jeetu%20Sharma%20128%20Kbps.mp3"
    // },
    // {
    //   title: "",
    //   artist: "",
    //   category: "",
    //   image: "",
    //   src: ""
    // },
    // ... (add more entries with image and music URLs)
]; 