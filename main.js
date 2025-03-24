$(document).ready(function () {
    // 匯入 Firebase SDK
    import("https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js").then(({ initializeApp }) => {
        import("https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js").then(({ getDatabase, ref, onValue }) => {
            // Firebase 設定
            const firebaseConfig = {
                apiKey: "AIzaSyAqnklEsaSCiq4IwVh4FtD7Ubc5H2DUrnI",
                authDomain: "thepomoli.firebaseapp.com",
                databaseURL: "https://thepomoli-default-rtdb.firebaseio.com",
                projectId: "thepomoli",
                storageBucket: "thepomoli.firebasestorage.app",
                messagingSenderId: "59738069258",
                appId: "1:59738069258:web:958f4f61801e7ea18f02f3",
                measurementId: "G-P0BN7JD7X6"
            };

            // 初始化 Firebase
            const app = initializeApp(firebaseConfig);
            const db = getDatabase(app);

            // 監聽資料變化
            onValue(ref(db, 'displayStatus'), (snapshot) => {
                const status = snapshot.val();
                if (status === 'show') {
                    // 顯示時，使用 fadeIn 淡入效果
                    $('#groundpage').fadeIn(3000);
                    const video = $('#groundpage video').get(0);
                    if (video) {
                        video.currentTime = 0;
                        video.play();
                    }
                    const audio = $('#groundpage audio').get(0);
                } else {
                    // 隱藏時，直接使用 hide() 移除元素
                    $('#groundpage').hide();
                }                
            });
        });
    });
});
