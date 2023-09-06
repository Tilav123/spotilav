let doc = document
let recently = []
let MyAccounts = {}
let ris;
let audio = doc.querySelector('audio')
let accessToken;
let clientId = 'ccef8fd1a6d345fbb9ab986160163837'
let clientSecret = '0df2d1f81fbe452bb0d27c321785732a'
const getToken = async () => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
        },
        body: "grant_type=client_credentials",
    });
    const data = await result.json();
    return data.access_token
}

getToken().then(function (result) {
    accessToken = result;
})
let recintlay = localStorage.getItem('Recently Songs')
recently = JSON.parse(recintlay)
if (recently == null) {
    recently = []
} else {
    ris = remove_duplicates(recently)
    if (ris.length > 50) {
        ris = []
        localStorage.setItem('Recently Songs', null)
    }
}
let dbl = null
doc.body.addEventListener('resize', resized2)
let searches_label = doc.querySelector('.searches-label')
function resized2() {
    let player = doc.querySelector('.player')
    if (doc.body.offsetWidth <= 908) {
        dbl = 'click'
        searches_label.style.display = 'flex'
        player.style.display = 'none'
    } else {
        searches_label.style.display = 'none'
        player.style.display = 'block'
        dbl = 'dblclick'
    }
}
resized2()
let rider = doc.querySelector('.rider')
let liso_ar = doc.querySelector('.liso_ar2')
let player_heart = doc.querySelector('.player-heart')
let id_tracks = ''
let ic233 = doc.querySelector('.ic')
let liked_mobile = doc.querySelector('.liked-mobile')
let mobile_start_btn = doc.querySelector('.mobile-start-btn')
let btn_top = null
let nezaed = doc.querySelector('.nezaed')
let mobile_player = doc.querySelector('.mobile-player')
let rand_i = 1
let max1 = 0
let dop_input = doc.querySelector('#dop-input')
let o = 0
let shablon1 = ''
let active_obj;
let dte = new Date()
let icon_men = doc.querySelectorAll('.icon-men')
let my_playlist = []
let Liked_tracks = []
Liked_tracks = JSON.parse(localStorage.getItem('Liked Songs'))
if (Liked_tracks == undefined || Liked_tracks == null) {
    Liked_tracks = []
}
let taxt = doc.querySelector('#text-like-playlist')
let my = doc.querySelector('.my-playlist-2-page')
let download_tracks = doc.querySelector('.download-tracks')
let audition = doc.querySelector('.audition')
let like_playlists = JSON.parse(localStorage.getItem('Library Liked Playlist'))
if (like_playlists == null || like_playlists == undefined) {
    like_playlists = []
} else {
    taxt.style.display = 'block'
}
let good_text = doc.querySelector('.good-text')
let hourt = new Date().getHours()
if (hourt > 8 && hourt < 18) {
    good_text.innerHTML = 'Good afternoon'
} else {
    good_text.innerHTML = 'Good evening'
}
if (hourt > 3 && hourt < 9) {
    good_text.innerHTML = 'Good morning'
}
let artists_S2 = doc.querySelector('.artists-s2')
let forward_btn = doc.querySelector('.forward')
let liked_2_page = doc.querySelector('.liked-2-page')
let random_btn = doc.querySelector('.btn-random')
let random_btn_mobile = doc.querySelector('.mob-rand')
random_btn_mobile.onclick = () => {
    random_btn_mobile.classList.toggle('active_rand_btn')
    random_btn.click()
}
let loop2 = doc.querySelector('.loop2')
loop2.onclick = () => {
    loop.click()
    loop2.classList.toggle('after_circle')
}
let control_mobile = doc.querySelector('.control-mobile')
control_mobile.onclick = () => {
    audition.click()
}
let back_btn = doc.querySelector('.back-end')
let strela = doc.querySelectorAll('.strela')
let all_s = doc.querySelector('.all-s')
let playlists_s = doc.querySelector('.playlists-s')
let page_2_songs = doc.querySelector('.page-2-songs-parent')
let albums_s = doc.querySelector('.albums-s')
let one_pig = null
let t2 = doc.querySelector('#t2')
let songs_s = doc.querySelector('.songs-s')
let artists_s = doc.querySelector('.artists-s')
let player_image = doc.querySelector('#pl_img')
let name_track = doc.querySelector('.name-tracks')
let player = doc.querySelector('.player')
let searchs = doc.querySelector('.searchs')
let homs = doc.querySelector('.homs')
let library = doc.querySelector('.library')
let help_block = doc.querySelectorAll('.help-block')
let help_image = doc.querySelectorAll('.help-image')
let librarys = doc.querySelector('.librarys')
let home = doc.querySelector('.Home')
let search_home = doc.querySelector('.Search-home')
let head1 = doc.querySelector('.head1')
let search_label = doc.querySelector('.search-label')
let home_search = doc.querySelector('.home-search')
let name_artists = doc.querySelector('.artsist')
let lik_l = doc.querySelector('#liked-2')
let bick = doc.querySelector('.bick')
bick.onclick = () => {
    back_btn.click()
}
let forw = doc.querySelector('.forw')
forw.onclick = () => {
    forward_btn.click()
}
let icon_52 = doc.querySelectorAll('.icon-52')
let dominant_color;
async function colors_dominant(src) {
    RGBaster.colors(src, {
        exclude: ['rgb(255,255,255)', 'rgb(255, 255, 254)', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 0.4039215686)'],
        success: function (palette) {
            dominant_color = palette.dominant
            return palette.dominant
        }
    });
}
let download_src;
let opisaniye2 = doc.querySelector('.opisaniye')
let played_btn = doc.querySelector('.played-btn')
let you = doc.querySelector('#you')
let yout = doc.querySelector('#yout')
let names_2_page = ''
let arr_tracks = []
let download_music_arr = []
let is2 = 0
let arr_tracks_2_page = []
let radio2;
let radio;
function remov() {
    previus_id = null
    let parent_track = doc.querySelectorAll('.parent-track')
    if (parent_track.length != 0) {
        for (let item of parent_track) {
            item.children[0].children[0].children[0].style.display = 'block'
            item.children[0].children[0].children[1].style.display = 'none'
            item.children[0].children[2].children[0].style.color = 'white'
        }
    }
}
download_music_arr = JSON.parse(localStorage.getItem('Download Songs'))
if (download_music_arr == null) {
    download_music_arr = []
} else {
    download_music_arr = remove_duplicates(download_music_arr)
}
let SongsIndex = 0
function select() {
    radio2 = doc.querySelectorAll('#radio2')
    radio = doc.querySelectorAll('#radio')
}
let min;
let secund;
function hronos_track(mili) {
    min = Math.floor(mili / 60000)
    secund = Math.floor((mili / 1000))
    secund = Math.floor(secund - (min * 60))
    if (secund < 10) {
        secund = '0' + secund
    }
}
let date_text;
setTimeout(() => {
    select()
    tak()
}, 10000)
let two_page_top_block = doc.querySelector('.two-page-top-block')
let albums_2_page = doc.querySelectorAll('.albums_2_page')
let info_text_2_page = doc.querySelector('.info-text-2-page')
let page_2_playlists = doc.querySelectorAll('.page-2-playlists')
async function shitalka(opis) {
    o = 0
    rider.style.display = 'none'
    icon_52[0].src = './img/no-green-heart.png'
    icon_52[0].classList.remove('WICH')
    let tracki = doc.querySelector('.tracki')
    tracki.style.display = 'block'
    t2.style.display = 'none'
    let image_2_page = doc.querySelector('.image-2-page')
    my.style.display = 'none'
    image_2_page.classList.remove('radius')
    let for_2_page = doc.querySelector('.for-2-page')
    for_2_page.style.display = 'block'
    strela[1].onclick = () => {
        let one_page = doc.querySelector('.one-page')
        let two_page = doc.querySelector('.two-page')
        one_page.style.display = 'none'
        two_page.style.display = 'block'
        search_label.style.display = 'none'
        head1.classList.remove('w-top')
    }
    opisaniye2.innerHTML = 'The hits of tomorrow are on Spotify today.'
    setTimeout(() => {
        if (arr_tracks_2_page.length != 0) {
            let length_songs = doc.querySelector('#length-songs')
            length_songs.innerHTML = arr_tracks_2_page.length
            let length_min = doc.querySelector('#length-min')
            let length_hr = doc.querySelector('#length-hr')
            let s = 0
            for (let item of arr_tracks_2_page) {
                s += item.duration_ms
            }
            hronos_track(s)
            let hr = Math.floor(min / 60)
            length_hr.innerHTML = hr
            length_min.innerHTML = Math.floor(min - (hr * 60))
            page_2_songs.innerHTML = ''
            let name_2_page = doc.querySelector('.name-2-page')
            for (let i = 0; i < arr_tracks_2_page.length; i++) {
                if (arr_tracks_2_page[i].album != null) {
                    if (arr_tracks_2_page[i].album.images[0].url.slice(0, 1) == 'h') {
                        hronos_track(arr_tracks_2_page[i].duration_ms)
                        shablon1 = `<div class="parent-track two-pige">
                        <div class="child1">
                            <div class="animation-block">
                                <p class="h-text text-22 gif">${arr_tracks_2_page[i].aydi + 1}</p>
                                <img src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif"" class="gif" style="display: none;">
                            </div>
                            <img src="${arr_tracks_2_page[i].album.images[0].url}" class="art-track">
                            <div class="text-info-track">
                                <p class="white-text-track name-shit" style="color: white;">${arr_tracks_2_page[i].name}</p>
                                <p class="h-text">${arr_tracks_2_page[i].album.artists[0].name}</p>
                            </div>
                        </div>
                        <div class="child2">
                            <p class="h-text">${arr_tracks_2_page[i].album.name}</p>
                        </div>
                        <div class="child3">
                            <p class="h-text">${arr_tracks_2_page[i].album.release_date}</p>
                        </div>
                        <div class="child4">
                        <div class="heart-track2"></div>
                            <p class="white-text-track" style="color: #B3B3B3;">${min + ':' + secund}</p>
                        </div>
                    </div>`
                        doc.body.addEventListener('resize', t1)
                        function t1() {
                            if (doc.body.offsetWidth <= 908) {
                                if (opis != 'like') {
                                    page_2_songs.innerHTML += shablon1
                                } else {
                                    page_2_songs.innerHTML += `<div class="parent-track two-pige parent-track-liko">
                        <div class="child1">
                            <div class="animation-block">
                                <p class="h-text text-22 gif">${arr_tracks_2_page[i].aydi + 1}</p>
                                <img src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif"" class="gif" style="display: none;">
                            </div>
                            <img src="${arr_tracks_2_page[i].album.images[0].url}" class="art-track">
                            <div class="text-info-track">
                                <p class="white-text-track name-shit" style="color: white;">${arr_tracks_2_page[i].name}</p>
                                <p class="h-text">${arr_tracks_2_page[i].album.artists[0].name}</p>
                            </div>
                        </div>
                        <div class="child2">
                            <p class="h-text">${arr_tracks_2_page[i].album.name}</p>
                        </div>
                        <div class="child3">
                            <p class="h-text">${arr_tracks_2_page[i].album.release_date}</p>
                        </div>
                        <div class="child4">
                        <div class="heart-track2" style="display: block"></div>
                            <p class="white-text-track" style="color: #B3B3B3; display: none;">${min + ':' + secund}</p>
                        </div>
                    </div>`
                                }
                            } else {
                                page_2_songs.innerHTML += shablon1
                            }
                            resized2()
                        }
                        t1()
                    }
                }
            }
        }
        liked_proverka()
        select_like(arr_tracks_2_page)
        setTimeout(() => {
            if (page_2_songs.innerHTML == '') {
                page_2_songs.innerHTML += `<h1 style="color: white; font-size: 62px; margin: 20px 0;">No tracks</h1>`
            }
        }, 1000)
    }, 1000)
    setTimeout(() => {
        let parent_track3 = doc.querySelectorAll('.two-pige')
        for (let i = 0; i < parent_track3.length; i++) {
            parent_track3[i].onclick = () => {
                o += 1
                is2 = i
                if (o == 1) {
                    two_page2(arr_tracks_2_page, '.two-pige')
                }
            }
        }
    }, 2000)
    icon_52[0].style.display = 'block'
    if_two_page()
    if (opis != null && opis != 'like') {
        if (opis[3].className == 'name-artists') {
            doc.body.addEventListener('resize', t3)
            function t3() {
                if (doc.body.offsetWidth <= 908) {
                    opisaniye2.innerHTML = opis[3].innerHTML
                } else {
                    opisaniye2.innerHTML = 'The hits of tomorrow are on Spotify today.'
                }
                resized2()
            }
            t3()
        } else {
            opisaniye2.innerHTML = 'The hits of tomorrow are on Spotify today.'
        }
    } else {
        opisaniye2.innerHTML = 'The hits of tomorrow are on Spotify today.'
    }
}
function tak() {
    let arr = []
    SongsIndex = 0
    let ir = 0
    let is = 0
    let previus_btn = null
    let previus_btn2 = null
    for (let it of radio2) {
        it.addEventListener('click', () => {
            audition.onclick = () => {
                if (btn_top.checked == true) {
                    btn_top.checked = false
                    audio.pause()
                } else {
                    btn_top.checked = true
                    audio.play()
                    if (btn_top.parentNode.parentNode.className == 'hi page-2-playlists') {
                        btn_top.parentNode.classList.add('btn_play_hover')
                    } else {
                        btn_top.parentNode.classList.add('btn_play2_hover')
                    }
                }
            }
            previus_btn = null
            btn_top = it
            pl_img.src = it.parentNode.parentNode.children[0].src
            for (let item of radio) {
                item.parentNode.classList.remove('btn_play_hover')
                item.parentNode.classList.remove('btn_play2_hover')
            }
            if (it.parentNode.parentNode.className == 'hi page-2-playlists') {
                it.parentNode.classList.add('btn_play_hover')
            } else {
                it.parentNode.classList.add('btn_play2_hover')
            }
            if (previus_btn2 != null) {
                if (previus_btn2.parentNode.parentNode.children[2].innerHTML != it.parentNode.parentNode.children[2].innerHTML) {
                    previus_btn2.parentNode.classList.remove('btn_play_hover')
                    previus_btn2.parentNode.classList.remove('btn_play2_hover')
                    ir = 1
                    if (ir == 1) {
                        for (let item of it.parentNode.parentNode.children) {
                            if (item.className == 'link') {
                                fetch(item.innerHTML + '/tracks', {
                                    method: "GET",
                                    headers: {
                                        'Authorization': 'Bearer ' + accessToken,
                                        'Content-Type': 'application/json'
                                    }
                                })
                                    .then(res => res.json())
                                    .then(res => {
                                        for (let i = 0; i < res.items.length; i++) {
                                            if (res.items[i] != null) {
                                                name_track.innerHTML = res.items[SongsIndex].name
                                                name_artists.innerHTML = res.items[SongsIndex].artists[0].name
                                                audio.src = res.items[0].preview_url
                                                player_heart.onclick = () => {
                                                    heart_play(res.items[SongsIndex], pl_img.src)
                                                }
                                                recently.unshift(res.items[0])
                                                active_obj = res.items[0]
                                                id_tracks = res.items[0].id
                                                res.items.forEach((n, u) => n.aydi = u + 1 - 1);
                                                SongsIndex = 0
                                                audio.onended = () => {
                                                    forward()
                                                }
                                                forward_btn.onclick = () => {
                                                    forward()
                                                }
                                                random_btn.onclick = () => {
                                                    rand_i += 1
                                                    if (rand_i % 2 == 0) {
                                                        random_btn.classList.add('active_rand_btn')
                                                    } else {
                                                        random_btn.classList.remove('active_rand_btn')
                                                    }
                                                }
                                                // 
                                                async function forward() {
                                                    if (rand_i % 2 == 0) {
                                                        random_btn.classList.add('active_rand_btn')
                                                        max1 = 0
                                                        max1 = res.items.length
                                                        let rand_num = 0 + Math.random() * (max1 + 1 - 0)
                                                        let num = Math.floor(rand_num)
                                                        SongsIndex = num
                                                        if (SongsIndex < 0) {
                                                            SongsIndex = 0
                                                        }
                                                    }
                                                    if (SongsIndex >= res.items.length - 1) {
                                                        SongsIndex = -1
                                                    } else if (SongsIndex <= 0) {
                                                        SongsIndex = res.items.length - 1
                                                    }
                                                    btn_top.checked = true
                                                    if (btn_top.parentNode.parentNode.className == 'hi page-2-playlists') {
                                                        btn_top.parentNode.classList.add('btn_play_hover')
                                                    } else {
                                                        btn_top.parentNode.classList.add('btn_play2_hover')
                                                    }
                                                    SongsIndex += 1
                                                    name_artists.innerHTML = res.items[SongsIndex].artists[0].name
                                                    audio.src = res.items[SongsIndex].preview_url
                                                    active_obj = res.items[SongsIndex]
                                                    recently.unshift(res.items[SongsIndex])
                                                    id_tracks = res.items[SongsIndex].id
                                                    let nim = res.items[SongsIndex].name
                                                    name_track.innerHTML = nim
                                                    player_heart.onclick = () => {
                                                        heart_play(res.items[SongsIndex], pl_img.src)
                                                    }
                                                    audio.play()
                                                }
                                                back_btn.onclick = () => {
                                                    back()
                                                }
                                                async function back() {
                                                    if (SongsIndex >= res.items.length) {
                                                        SongsIndex = 0
                                                    } else if (SongsIndex <= 0) {
                                                        SongsIndex = res.items.length
                                                    }
                                                    btn_top.checked = true
                                                    if (btn_top.parentNode.parentNode.className == 'hi page-2-playlists') {
                                                        btn_top.parentNode.classList.add('btn_play_hover')
                                                    } else {
                                                        btn_top.parentNode.classList.add('btn_play2_hover')
                                                    }
                                                    SongsIndex -= 1
                                                    name_track.innerHTML = res.items[SongsIndex].name
                                                    name_artists.innerHTML = res.items[SongsIndex].artists[0].name
                                                    audio.src = res.items[SongsIndex].preview_url
                                                    active_obj = res.items[SongsIndex]
                                                    id_tracks = res.items[SongsIndex].id
                                                    recently.unshift(res.items[SongsIndex])
                                                    player_heart.onclick = () => {
                                                        heart_play(res.items[SongsIndex], pl_img.src)
                                                    }
                                                    audio.play()
                                                }
                                                player_heart.onclick = () => {
                                                    heart_play(res.items[SongsIndex], pl_img.src)
                                                }
                                                //
                                            }
                                        }
                                        // 
                                    })
                            }
                        }
                        control_mobile.classList.remove('stope')
                        audition.style.backgroundImage = 'url(' + './img/play.png' + ')'
                    }
                } else {
                    if (ir > 0) {
                        it.checked = false
                        ir = 0
                        if (it.parentNode.parentNode.className == 'hi page-2-playlists') {
                            it.parentNode.classList.remove('btn_play_hover')
                        } else {
                            it.parentNode.classList.remove('btn_play2_hover')
                        }
                        audio.pause()
                    } else {
                        ir = 1
                        if (ir == 1) {
                            audio.play()
                        }
                    }
                }
            } else {
                ir = 1
                if (ir == 1) {
                    for (let item of it.parentNode.parentNode.children) {
                        if (item.className == 'link') {
                            fetch(item.innerHTML + '/tracks', {
                                method: "GET",
                                headers: {
                                    'Authorization': 'Bearer ' + accessToken,
                                    'Content-Type': 'application/json'
                                }
                            })
                                .then(res => res.json())
                                .then(res => {
                                    for (let i = 0; i < res.items.length; i++) {
                                        if (res.items[i] != null) {
                                            audio.src = res.items[0].preview_url
                                            active_obj = res.items[0]
                                            recently.unshift(res.items[0])
                                            id_tracks = res.items[0].id
                                            name_track.innerHTML = res.items[SongsIndex].name
                                            name_artists.innerHTML = res.items[SongsIndex].artists[0].name
                                            res.items.forEach((n, u) => n.aydi = u + 1 - 1);
                                            SongsIndex = 0
                                            player_heart.onclick = () => {
                                                heart_play(res.items[0], pl_img.src)
                                            }
                                            btn_top.checked = true
                                            audio.onended = () => {
                                                forward()
                                            }
                                            forward_btn.onclick = () => {
                                                forward()
                                            }
                                            back_btn.onclick = () => {
                                                back()
                                            }
                                            async function back() {
                                                if (SongsIndex >= res.items.length) {
                                                    SongsIndex = 0
                                                } else if (SongsIndex <= 0) {
                                                    SongsIndex = res.items.length
                                                }
                                                btn_top.checked = true
                                                if (btn_top.parentNode.parentNode.className == 'hi page-2-playlists') {
                                                    btn_top.parentNode.classList.add('btn_play_hover')
                                                } else {
                                                    btn_top.parentNode.classList.add('btn_play2_hover')
                                                }
                                                SongsIndex -= 1
                                                name_track.innerHTML = res.items[SongsIndex].name
                                                name_artists.innerHTML = res.items[SongsIndex].artists[0].name = res.items[SongsIndex].preview_url
                                                active_obj = res.items[SongsIndex]
                                                id_tracks = res.items[SongsIndex].id
                                                recently.unshift(res.items[SongsIndex])
                                                player_heart.onclick = () => {
                                                    heart_play(res.items[SongsIndex], pl_img.src)
                                                }
                                                audio.play()
                                            }
                                            random_btn.onclick = () => {
                                                rand_i += 1
                                                if (rand_i % 2 == 0) {
                                                    random_btn.classList.add('active_rand_btn')
                                                } else {
                                                    random_btn.classList.remove('active_rand_btn')
                                                }
                                            }
                                            async function forward() {
                                                if (rand_i % 2 == 0) {
                                                    random_btn.classList.add('active_rand_btn')
                                                    max1 = 0
                                                    max1 = res.items.length
                                                    let rand_num = 0 + Math.random() * (max1 + 1 - 0)
                                                    let num = Math.floor(rand_num)
                                                    SongsIndex = num
                                                    if (SongsIndex < 0) {
                                                        SongsIndex = 0
                                                    }
                                                }
                                                if (SongsIndex >= res.items.length - 1) {
                                                    SongsIndex = -1
                                                } else if (SongsIndex < 0) {
                                                    SongsIndex = res.items.length - 1
                                                }
                                                btn_top.checked = true
                                                if (btn_top.parentNode.parentNode.className == 'hi page-2-playlists') {
                                                    btn_top.parentNode.classList.add('btn_play_hover')
                                                } else {
                                                    btn_top.parentNode.classList.add('btn_play2_hover')
                                                }
                                                SongsIndex += 1
                                                name_track.innerHTML = res.items[SongsIndex].name
                                                name_artists.innerHTML = res.items[SongsIndex].artists[0].name
                                                audio.src = res.items[SongsIndex].preview_url
                                                active_obj = res.items[SongsIndex]
                                                recently.unshift(res.items[SongsIndex])
                                                id_tracks = res.items[SongsIndex].id
                                                player_heart.onclick = () => {
                                                    heart_play(res.items[SongsIndex], pl_img.src)
                                                }
                                                audio.play()
                                            }
                                        }
                                    }
                                })
                        }
                    }
                    control_mobile.classList.remove('stope')
                    audition.style.backgroundImage = 'url(' + './img/play.png' + ')'
                }
            }
            previus_btn2 = it
        })
    }
    for (let i = 0; i < radio.length; i++) {
        radio[i].addEventListener('click', function (e) {
            audition.onclick = () => {
                if (btn_top.checked == true) {
                    btn_top.checked = false
                    audio.pause()
                } else {
                    btn_top.checked = true
                    audio.play()
                    if (btn_top.parentNode.parentNode.className == 'hi page-2-playlists') {
                        btn_top.parentNode.classList.add('btn_play_hover')
                    } else {
                        btn_top.parentNode.classList.add('btn_play2_hover')
                    }
                }
            }
            previus_btn2 = null
            btn_top = radio[i]
            select()
            for (let item of radio) {
                item.parentNode.classList.remove('btn_play_hover')
                item.parentNode.classList.remove('btn_play2_hover')
            }
            for (let item of radio2) {
                item.parentNode.classList.remove('btn_play_hover')
                item.parentNode.classList.remove('btn_play2_hover')
            }
            audio.onended = () => {
                forward()
            }
            forward_btn.onclick = () => {
                forward()
            }
            back_btn.onclick = () => {
                back()
            }
            async function back() {
                if (SongsIndex >= arr.length) {
                    SongsIndex = 0
                } else if (SongsIndex <= 0) {
                    SongsIndex = arr.length
                }
                btn_top.checked = true
                if (btn_top.parentNode.parentNode.className == 'hi page-2-playlists') {
                    btn_top.parentNode.classList.add('btn_play_hover')
                } else {
                    btn_top.parentNode.classList.add('btn_play2_hover')
                }
                SongsIndex -= 1
                audio.src = arr[SongsIndex].track.preview_url
                active_obj = arr[SongsIndex].track
                id_tracks = arr[SongsIndex].track.id
                recently.unshift(arr[SongsIndex].track)
                name_track.innerText = arr[SongsIndex].track.name
                name_artists.innerHTML = arr[SongsIndex].track.artists[0].name
                player_image.src = arr[SongsIndex].track.album.images[0].url
                player_heart.onclick = () => {
                    heart_play(arr[SongsIndex].track, pl_img.src)
                }
                audio.play()
            }
            random_btn.onclick = () => {
                rand_i += 1
                if (rand_i % 2 == 0) {
                    random_btn.classList.add('active_rand_btn')
                } else {
                    random_btn.classList.remove('active_rand_btn')
                }
            }
            async function forward() {
                if (rand_i % 2 == 0) {
                    random_btn.classList.add('active_rand_btn')
                    max1 = 0
                    max1 = arr.length
                    let rand_num = 0 + Math.random() * (max1 + 1 - 0)
                    let num = Math.floor(rand_num)
                    SongsIndex = num
                    if (SongsIndex < 0) {
                        SongsIndex = 0
                    }
                }
                if (SongsIndex >= arr.length - 1) {
                    SongsIndex = -1
                } else if (SongsIndex < 0) {
                    SongsIndex = arr.length - 1
                }
                btn_top.checked = true
                if (btn_top.parentNode.parentNode.className == 'hi page-2-playlists') {
                    btn_top.parentNode.classList.add('btn_play_hover')
                } else {
                    btn_top.parentNode.classList.add('btn_play2_hover')
                }
                SongsIndex += 1
                audio.src = arr[SongsIndex].track.preview_url
                active_obj = arr[SongsIndex].track
                id_tracks = arr[SongsIndex].track.id
                name_track.innerText = arr[SongsIndex].track.name
                recently.unshift(arr[SongsIndex].track)
                name_artists.innerHTML = arr[SongsIndex].track.artists[0].name
                player_image.src = arr[SongsIndex].track.album.images[0].url
                player_heart.onclick = () => {
                    heart_play(arr[SongsIndex].track, pl_img.src)
                }
                audio.play()
            }
            if (this.parentNode.parentNode.className == 'hi page-2-playlists') {
                this.parentNode.classList.add('btn_play_hover')
            } else {
                this.parentNode.classList.add('btn_play2_hover')
            }
            for (let item of radio2) {
                item.parentNode.classList.remove('btn_play_hover')
                item.parentNode.classList.remove('btn_play2_hover')
            }
            if (previus_btn != null) {
                if (previus_btn.parentNode.parentNode.children[2].innerHTML != this.parentNode.parentNode.children[2].innerHTML) {
                    previus_btn.parentNode.classList.remove('btn_play_hover')
                    previus_btn.parentNode.classList.remove('btn_play2_hover')
                    is = 1
                    if (is == 1) {
                        for (let item of this.parentNode.parentNode.children) {
                            if (item.className == 'link') {
                                fetch(item.innerHTML, {
                                    method: "GET",
                                    headers: {
                                        'Authorization': 'Bearer ' + accessToken,
                                        'Content-Type': 'application/json'
                                    }
                                })
                                    .then(res => res.json())
                                    .then(res => {
                                        for (let i = 0; i < res.items.length; i++) {
                                            if (res.items[i].track.preview_url == null) {
                                                res.items[i] = ''
                                            }
                                        }
                                        setTimeout(() => {
                                            arr = res.items.filter(item => item != '')
                                            arr.forEach((n, u) => n.aydi = u + 1 - 1);
                                            audio.src = arr[0].track.preview_url
                                            active_obj = arr[0].track
                                            recently.unshift(arr[0].track)
                                            id_tracks = arr[0].track.id
                                            name_track.innerText = arr[0].track.name
                                            name_artists.innerText = arr[0].track.artists[0].name
                                            player_image.src = arr[0].track.album.images[0].url
                                            SongsIndex = 0
                                            player_heart.onclick = () => {
                                                heart_play(arr[0].track, pl_img.src)
                                            }
                                            audio.play()
                                        }, 500)
                                    })
                            }
                        }
                        control_mobile.classList.remove('stope')
                        audition.style.backgroundImage = 'url(' + './img/play.png' + ')'
                    }
                } else {
                    if (is > 0) {
                        this.checked = false
                        audition.style.backgroundImage = 'url(' + './img/stop.png' + ')'
                        is = 0
                        control_mobile.classList.add('stope')
                        audio.pause()
                        if (this.parentNode.parentNode.className == 'hi page-2-playlists') {
                            this.parentNode.classList.remove('btn_play_hover')
                        } else {
                            this.parentNode.classList.remove('btn_play2_hover')
                        }
                    } else {
                        is = 1
                        if (is == 1) {
                            audio.play()
                        }
                    }
                }
            } else {
                is = 1
                if (is == 1) {
                    for (let item of this.parentNode.parentNode.children) {
                        if (item.className == 'link') {
                            fetch(item.innerHTML, {
                                method: "GET",
                                headers: {
                                    'Authorization': 'Bearer ' + accessToken,
                                    'Content-Type': 'application/json'
                                }
                            })
                                .then(res => res.json())
                                .then(res => {
                                    for (let i = 0; i < res.items.length; i++) {
                                        if (res.items[i].track.preview_url == null) {
                                            res.items[i] = ''
                                        }
                                    }
                                    setTimeout(() => {
                                        arr = res.items.filter(item => item != '')
                                        arr.forEach((n, u) => n.aydi = u + 1 - 1);
                                        audio.src = arr[0].track.preview_url
                                        id_tracks = arr[0].track.id
                                        active_obj = arr[0].track
                                        recently.unshift(arr[0].track)
                                        name_track.innerText = arr[0].track.name
                                        name_artists.innerText = arr[0].track.artists[0].name
                                        player_image.src = arr[0].track.album.images[0].url
                                        player_heart.onclick = () => {
                                            heart_play(arr[0].track, pl_img.src)
                                        }
                                        SongsIndex = 0
                                        audio.play()
                                    }, 500)
                                })
                        }
                    }
                    btn_top.checked = true
                    control_mobile.classList.remove('stope')
                    audition.style.backgroundImage = 'url(' + './img/play.png' + ')'
                }
            }
            previus_btn = this
        })
    }













































    // 2 PAGE
    two_page_top_block = doc.querySelector('.two-page-top-block')
    albums_2_page = doc.querySelectorAll('.albums_2_page')
    info_text_2_page = doc.querySelector('.info-text-2-page')
    page_2_playlists = doc.querySelectorAll('.page-2-playlists')
    //

    // 
    function ned() {
        page_2_songs.innerHTML = ''
        let aftor = doc.querySelector('.aftor')
        let two_page_top_block = doc.querySelector('.two-page-top-block')
        let info_text_2_page = doc.querySelector('.info-text-2-page')
        aftor.setAttribute('style', 'background-image:  linear-gradient(180deg, #ea2243 5.09%, #121212 32%);')
        aftor.classList.remove('aftor-js')
        info_text_2_page.classList.remove('info-text-2-page-js')
        two_page_top_block.classList.remove('h-500')
        let image_2_page = doc.querySelector('.image-2-page')
        image_2_page.style.display = 'block'
        image_2_page.classList.add('image-recently')
        doc.body.addEventListener('resize', t2)
        function t2() {
            if (doc.body.offsetWidth <= 908) {
                image_2_page.src = 'https://cdn.icon-icons.com/icons2/1334/PNG/512/musicnotequaver_87184.png'
            } else {
                image_2_page.src = 'https://cdn-icons-png.flaticon.com/512/3318/3318670.png'
            }
            resized2()
        }
        t2()
        let two_page_cat = doc.querySelector('.two-page-cat')
        two_page_cat.innerHTML = 'PLAYLIST'
        let name_two_page = doc.querySelector('.name-2-page')
        name_two_page.innerHTML = 'Recently Songs'
        let one_page = doc.querySelector('.one-page')
        let two_page = doc.querySelector('.two-page')
        one_page.style.display = 'none'
        two_page.style.display = 'block'
        search_label.style.display = 'none'
        head1.classList.remove('w-top')
        recintlay = localStorage.getItem('Recently Songs')
        recently = JSON.parse(recintlay)
        if (recently == null) {
            recently = []
        }
        function opa() {
            arr_tracks_2_page = JSON.parse(localStorage.getItem('Recently Songs'))
            arr_tracks_2_page.forEach((n, u) => n.aydi = u + 1 - 1);
            shitalka(null)
            icon_52[0].style.display = 'none'
        }
        if (home_search.style.display == 'none') {
            opa()
        } else {
            opa()
        }
        names_2_page = 'Recently'
        icon_52[0].style.display = 'none'
        if_two_page()
    }
    recently_2_page.addEventListener('click', ned)
    function download_ned() {
        if (download_music_arr.length > 0) {
            download_music_arr = remove_duplicates(download_music_arr)
        }
        page_2_songs.innerHTML = ''
        let aftor = doc.querySelector('.aftor')
        let two_page_top_block = doc.querySelector('.two-page-top-block')
        let info_text_2_page = doc.querySelector('.info-text-2-page')
        aftor.setAttribute('style', 'background-image:  linear-gradient(180deg, #22ea6b8b 5.09%, #121212 32%);')
        aftor.classList.remove('aftor-js')
        info_text_2_page.classList.remove('info-text-2-page-js')
        two_page_top_block.classList.remove('h-500')
        let image_2_page = doc.querySelector('.image-2-page')
        image_2_page.style.display = 'block'
        image_2_page.classList.add('image-recently')
        image_2_page.src = './img/Music download icon.png'
        let two_page_cat = doc.querySelector('.two-page-cat')
        two_page_cat.innerHTML = 'PLAYLIST'
        let name_two_page = doc.querySelector('.name-2-page')
        name_two_page.innerHTML = 'Downloads Songs'
        let one_page = doc.querySelector('.one-page')
        let two_page = doc.querySelector('.two-page')
        one_page.style.display = 'none'
        two_page.style.display = 'block'
        search_label.style.display = 'none'
        head1.classList.remove('w-top')
        function opa() {
            arr_tracks_2_page = download_music_arr
            arr_tracks_2_page.forEach((n, u) => n.aydi = u + 1 - 1);
            shitalka(null)
            icon_52[0].style.display = 'none'
        }
        if (home_search.style.display == 'none') {
            opa()
        } else {
            opa()
        }
        names_2_page = 'Download'
        icon_52[0].style.display = 'none'
        if_two_page()
    }
    let dow_2_page = doc.querySelector('.download-2-page')
    dow_2_page.addEventListener('click', download_ned)
    for (let ity = 0; ity < page_2_playlists.length; ity++) {
        page_2_playlists[ity].addEventListener(dbl, () => {
            rider.style.display = 'none'
            colors_dominant(page_2_playlists[ity].children[0].src)
            let aftor = doc.querySelector('.aftor')
            icon_52[0].onclick = () => {
                lib(page_2_playlists[ity].children[0].src, page_2_playlists[ity].children[2].innerHTML, page_2_playlists[ity].children[1].innerHTML, 'playlist')
            }
            setTimeout(() => {
                aftor.setAttribute('style', 'background-image: linear-gradient(180deg, ' + dominant_color + ' 5.09%, #121212 32%);')
                aftor.classList.remove('aftor-js')
            }, 3000)
            info_text_2_page.classList.remove('info-text-2-page-js')
            two_page_top_block.classList.remove('h-500')
            let image_2_page = doc.querySelector('.image-2-page')
            image_2_page.style.display = 'block'
            image_2_page.src = page_2_playlists[ity].children[0].src
            let two_page_cat = doc.querySelector('.two-page-cat')
            two_page_cat.innerHTML = 'PLAYLIST'
            let name_two_page = doc.querySelector('.name-2-page')
            name_two_page.innerHTML = page_2_playlists[ity].children[2].innerHTML
            let one_page = doc.querySelector('.one-page')
            let two_page = doc.querySelector('.two-page')
            one_page.style.display = 'none'
            two_page.style.display = 'block'
            search_label.style.display = 'none'
            head1.classList.remove('w-top')
            image_2_page.classList.remove('image-recently')
            function opa() {
                arr_tracks_2_page = []
                fetch(page_2_playlists[ity].children[1].innerHTML, {
                    method: "GET",
                    headers: {
                        'Authorization': 'Bearer ' + accessToken,
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(res => {
                        for (let item of res.items) {
                            if (item.track.preview_url != null) {
                                arr_tracks_2_page.push(item.track)
                            }
                        }
                        arr_tracks_2_page.forEach((n, u) => n.aydi = u + 1 - 1);
                        shitalka(page_2_playlists[ity].children)
                    })
            }
            if (home_search.style.display == 'none') {
                if (page_2_playlists[ity].children[2].innerHTML != names_2_page) {
                    opa()
                }
            } else {
                opa()
            }
            names_2_page = page_2_playlists[ity].children[2].innerHTML
            if_two_page()
            prov(page_2_playlists[ity].innerHTML)
        })
    }
    for (let idy = 0; idy < albums_2_page.length; idy++) {
        albums_2_page[idy].addEventListener(dbl, () => {
            rider.style.display = 'none'
            colors_dominant(albums_2_page[idy].children[0].src)
            let aftor = doc.querySelector('.aftor')
            icon_52[0].onclick = () => {
                lib(albums_2_page[idy].children[0].src, albums_2_page[idy].children[2].innerHTML, albums_2_page[idy].children[1].innerHTML, 'album')
            }
            setTimeout(() => {
                aftor.setAttribute('style', 'background-image: linear-gradient(180deg, ' + dominant_color + ' 5.09%, #121212 32%);')
                aftor.classList.remove('aftor-js')
            }, 3000)
            info_text_2_page.classList.remove('info-text-2-page-js')
            two_page_top_block.classList.remove('h-500')
            let image_2_page = doc.querySelector('.image-2-page')
            image_2_page.style.display = 'block'
            image_2_page.src = albums_2_page[idy].children[0].src
            let two_page_cat = doc.querySelector('.two-page-cat')
            two_page_cat.innerHTML = 'ALBUMS'
            let name_two_page = doc.querySelector('.name-2-page')
            name_two_page.innerHTML = albums_2_page[idy].children[2].innerHTML
            let one_page = doc.querySelector('.one-page')
            let two_page = doc.querySelector('.two-page')
            one_page.style.display = 'none'
            two_page.style.display = 'block'
            search_label.style.display = 'none'
            head1.classList.remove('w-top')
            image_2_page.classList.remove('image-recently')
            let albom = null
            function opa() {
                fetch(albums_2_page[idy].children[1].innerHTML, {
                    method: "GET",
                    headers: {
                        'Authorization': 'Bearer ' + accessToken,
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => response.json())
                    .then((result) => {
                        albom = result
                    })
                setTimeout(() => {
                    arr_tracks_2_page = []
                    fetch(albums_2_page[idy].children[1].innerHTML + '/' + 'tracks', {
                        method: "GET",
                        headers: {
                            'Authorization': 'Bearer ' + accessToken,
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => response.json())
                        .then((result) => {
                            for (let item of result.items) {
                                item.album = albom
                                if (item.preview_url != null) {
                                    arr_tracks_2_page.push(item) // Трек
                                }
                            }
                            arr_tracks_2_page.forEach((n, u) => n.aydi = u + 1 - 1);
                            shitalka(albums_2_page[idy].children)
                        })
                }, 1000)
            }
            if (home_search.style.display == 'none') {
                if (albums_2_page[idy].children[2].innerHTML != names_2_page) {
                    opa()
                }
            } else {
                opa()
            }
            names_2_page = albums_2_page[idy].children[2].innerHTML
            if_two_page()
            prov(albums_2_page[idy].innerHTML)
        })
    }
    // 
    let artists_2_page = doc.querySelectorAll('.artists_2_page')
    for (let idy = 0; idy < artists_2_page.length; idy++) {
        artists_2_page[idy].addEventListener(dbl, () => {
            rider.style.display = 'none'
            let aftor = doc.querySelector('.aftor')
            setTimeout(() => {
                aftor.setAttribute('style', 'background-image: url(' + artists_2_page[idy].children[0].src + ');')
                aftor.classList.add('aftor-js')
            }, 3000)
            icon_52[0].onclick = () => {
                lib(artists_2_page[idy].children[0].src, artists_2_page[idy].children[2].innerHTML, artists_2_page[idy].children[1].innerHTML, 'artist')
            }
            info_text_2_page.classList.add('info-text-2-page-js')
            two_page_top_block.classList.add('h-500')
            let image_2_page = doc.querySelector('.image-2-page')
            image_2_page.style.display = 'none'
            let two_page_cat = doc.querySelector('.two-page-cat')
            two_page_cat.innerHTML = `<img src="https://spotiwy.netlify.app/icons/verifed.png">  ` + '  Verified Artist'
            let name_two_page = doc.querySelector('.name-2-page')
            name_two_page.innerHTML = artists_2_page[idy].children[2].innerHTML + ` <img src="https://spotiwy.netlify.app/icons/artist.svg" class="art-icon">`
            let one_page = doc.querySelector('.one-page')
            let two_page = doc.querySelector('.two-page')
            one_page.style.display = 'none'
            two_page.style.display = 'block'
            search_label.style.display = 'none'
            head1.classList.remove('w-top')
            image_2_page.classList.remove('image-recently')
            function opa() {
                arr_tracks_2_page = []
                fetch(artists_2_page[idy].children[1].innerHTML + '/albums', {
                    method: "GET",
                    headers: {
                        'Authorization': 'Bearer ' + accessToken,
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => response.json())
                    .then((result) => {
                        for (let i = 0; i < result.items.length; i++) {
                            arr_tracks_2_page = []
                            fetch(result.items[i].href + '/tracks', {
                                method: "GET",
                                headers: {
                                    'Authorization': 'Bearer ' + accessToken,
                                    'Content-Type': 'application/json'
                                }
                            })
                                .then(response => response.json())
                                .then((res) => {
                                    for (let i = 0; i < res.items.length; i++) {
                                        res.items[i].album = result.items[i]
                                        if (res.items[i].preview_url != null) {
                                            arr_tracks_2_page.push(res.items[i]) //Треки
                                        }
                                        arr_tracks_2_page = arr_tracks_2_page.slice(0, 20)
                                    }
                                    arr_tracks_2_page.forEach((n, u) => n.aydi = u + 1 - 1);
                                    shitalka(artists_2_page[idy].children)
                                })
                        }
                        // 
                    })
            }
            if (home_search.style.display == 'none') {
                if (artists_2_page[idy].children[2].innerHTML != names_2_page) {
                    opa()
                }
            } else {
                opa()
            }
            names_2_page = artists_2_page[idy].children[2].innerHTML
            prov(artists_2_page[idy].innerHTML)
        })
    }
}
let image_playlists = doc.querySelectorAll('.image-playlists')
let link = doc.querySelectorAll('.link')
let name_playlists = doc.querySelectorAll('.name-playlists')
let mix = [
    {
        name: 'Breeton boi',
        url: 'https://open.spotify.com/playlist/37i9dQZF1EIUPTZsI70Rrw'
    },
    {
        name: 'Daily Mix 6',
        url: 'https://open.spotify.com/playlist/37i9dQZF1E38KI8LFRxWe1'
    },
    {
        name: 'Retro Gaming',
        url: 'https://open.spotify.com/playlist/37i9dQZF1DWYnY33e7En9e'
    },
    {
        name: 'Mc teuzin pv',
        url: 'https://open.spotify.com/playlist/37i9dQZF1EIVFAdrtV5l1l'
    },
    {
        name: 'Mc La davinte: mix',
        url: 'https://open.spotify.com/playlist/37i9dQZF1EIX0AsfWyP73L'
    },
    {
        name: 'Mega Hit Mix',
        url: 'https://open.spotify.com/playlist/37i9dQZF1DXbYM3nMM0oPk'
    },
]
setTimeout(() => {
    for (let item of mix) {
        let playlistLin = `${item.url.split('/').pop()}`
        fetch(`https://api.spotify.com/v1/playlists/${playlistLin}`, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((result) => {
                image_playlists[num].src = result.images[0].url
                name_playlists[num].innerHTML = result.name
                link[num].innerHTML = result.tracks.href
                num += 1
            })
    }
}, 8000)
let top_mix = doc.querySelector('.top_mix')
let made_for_you = doc.querySelector('.made_for_you')
let russian = doc.querySelector('.russian')
function gg(playlists, post) {
    fetch('https://api.spotify.com/v1/search?q=' + playlists + '*&type=album,artist,playlist,track&limit=50&offset=0&market=UZ', {
        authority: "api.spotify.com",
        method: "GET",
        path: "/v1/search?q=ona*&type=album,artist,playlist,track&limit=50&offset=0&market=UZ",
        scheme: "https",
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': "application/json; charset=utf-8"
        }
    })
        .then(response => response.json())
        .then((result) => {
            for (let item of result.playlists.items) {
                post.innerHTML += `<div class="item page-2-playlists">
                <img src="${item.images[0].url}" class="image-playlist">
                <span class="link">${item.tracks.href}</span>
                <p class="name-playlist">${item.name}</p>
                <p class="name-artists">${item.description}</p>
                <div class="btn_play2">
                    <input type="radio" name="radio" id="radio" class="radio">
                    <label for="radio" class="play"></label>
                </div>
            </div>`
            }
        })
}
setTimeout(() => {
    gg('Gaming', russian)
}, 2000)
setTimeout(() => {
    audition.onclick = () => {
        if (btn_top.checked == true) {
            btn_top.checked = false
            audio.pause()
        } else {
            btn_top.checked = true
            audio.play()
            if (btn_top.parentNode.parentNode.className == 'hi page-2-playlists') {
                btn_top.parentNode.classList.add('btn_play_hover')
            } else {
                btn_top.parentNode.classList.add('btn_play2_hover')
            }
        }
    }
}, 2000)
// Собственный слайдер осонованный на касании
let carousel = doc.querySelectorAll('.carousel')
let isDragStart = false, prevPageX, prevScrollLeft
for (let item of carousel) {
    item.addEventListener('mousemove', (e) => {
        if (!isDragStart) return
        e.preventDefault()
        item.parentNode.style.transition = 'none'
        let positionDifff = e.pageX - prevPageX
        item.parentNode.scrollLeft = prevScrollLeft - positionDifff
    })
    item.addEventListener('mousedown', (e) => {
        isDragStart = true
        prevPageX = e.pageX
        prevScrollLeft = item.parentNode.scrollLeft
        item.parentNode.style.transition = 'transform 0.3s'
    })
    item.addEventListener('mouseup', (e) => {
        isDragStart = false
    })
}

// player
let span = doc.querySelector('.current')
setTimeout(() => {
    let img = doc.querySelectorAll('img')
    for (let image of img) {
        image.setAttribute('draggable', 'false')
    }
}, 5000)
let right_cross = doc.querySelector('.right-cross')
right_cross.addEventListener('click', css_if)
let iy = 1
function css_if() {
    iy += 1
    let ssc = doc.querySelector('#if')
    if (iy % 2 == 0) {
        ssc.href = './style/if.css'
    } else {
        ssc.href = ''
    }
}
// Ползунок
let range = doc.querySelector('.range')
let range_track = doc.querySelector('.range-track')
let mobile_range = doc.querySelector('.range-mobile')
let mobile_update = doc.querySelector('.mobile-update')
let endid = doc.querySelector('.end')
let min_right = doc.querySelector('.min-right')
let min_left = doc.querySelector('.min-left')
let left_mob = doc.querySelector('#left-mob')
let right_mob = doc.querySelector('#right-mob')
range.addEventListener('input', polzunok)
mobile_range.addEventListener('input', polzunok)
async function polzunok(e) {
    let duration = audio.duration
    audio.currentTime = (this.value / 100) * duration
}
let iyy = doc.querySelector('i')
let n_lyric = doc.querySelector('.n-lyric')
audio.addEventListener('timeupdate', () => {
    let duration = audio.duration
    let current = 0
    current += audio.currentTime
    let procent = (current / duration) * 100
    range_track.style.width = procent + '%'
    mobile_update.style.width = procent + '%'
    range.value = procent
    mobile_range.value = procent
    let minutes_left = Math.floor(current / 60)
    let minutes_right = Math.floor(duration / 60)
    min_right.innerHTML = `${minutes_right}:`
    if (minutes_left > 0) {
        current = current - minutes_left * 60
    }
    min_left.innerHTML = `${minutes_left}:`
    if (Math.floor(current) < 10) {
        span.innerHTML = '0' + Math.floor(current)
    } else {
        span.innerHTML = Math.floor(current)
    }
    // 
    if (audio.played.length > 0) {
        let second_end = 0
        second_end += Math.floor(duration)
        if (minutes_right > 0) {
            second_end = Math.floor(second_end - (minutes_right * 60))
        }
        if (second_end < 10) {
            endid.innerHTML = `0${second_end}`
        } else {
            endid.innerHTML = second_end
        }
    } else {
        min_right.innerHTML = '0:'
        endid.innerHTML = '00'
    }
    let duration_text = doc.querySelectorAll('.duration-text')
    left_mob.innerHTML = duration_text[0].innerHTML
    right_mob.innerHTML = duration_text[1].innerHTML
    if (lyric_arr.length > 0) {
        if (procent > 80) {
            procent = procent - 2
        }
        let current_text = (lyric_arr.length / 100) * procent
        current_text = Math.floor(current_text)
        let text_s = doc.querySelectorAll('.text-s')
        for (let i = 0; i < text_s.length; i++) {
            if (i <= current_text) {
                text_s[i].style.opacity = `100%`
            } else {
                text_s[i].style.opacity = `40%`
            }
            if (i === current_text) {
                text_s[i].style.transform = `scale(1.10)`
                text_s[i].style.marginLeft = `25px`
                if (i < 2) {
                    text_song.scrollTop = 0
                } else {
                    text_song.scrollTop = text_s[i - 2].offsetTop - 40
                }
            } else {
                text_s[i].style.marginLeft = `0px`
                text_s[i].style.transform = `scale(1)`
            }
        }
    }
})
// 
let loop = doc.querySelector('.loop')
loop.addEventListener('click', zaloopa)
let bv = 1
function zaloopa() {
    bv += 1
    if (bv % 2 == 0) {
        audio.setAttribute('loop', '')
        this.classList.add('after_circle')
    } else {
        audio.removeAttribute('loop', '')
        this.classList.remove('after_circle')
    }
}
let volume_inp = doc.querySelector('.vol')
let t = doc.querySelector('.t')
let volume_icon_after = doc.querySelector('.volume-icon_after')
volume_inp.addEventListener('input', () => {
    audio.volume = volume_inp.value / 100
    t.style.width = volume_inp.value + '%'
    if (volume_inp.value == 0) {
        volume_icon_after.style.display = 'block'
    } else {
        volume_icon_after.style.display = 'none'
    }
})

// Полноэкранный режим сайта (fullscreen)
let elem = document.documentElement;
let full = doc.querySelector('.full');
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
};
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}
let full_i = 1
function screenLoader() {
    full_i += 1
    if (full_i % 2 == 0) {
        openFullscreen()
        full.classList.add('exit-screen')
    } else {
        closeFullscreen()
        full.classList.remove('exit-screen')
    }
}
full.addEventListener("click", screenLoader);
let pl_img = doc.querySelector('#pl_img')
pl_img.onclick = () => {
    pl_img.classList.toggle('player-image_js')
}
let men = doc.querySelectorAll('.men')
homs.addEventListener('click', () => {
    library.style.display = 'none'
    home.style.display = 'block'
    search_home.style.display = 'none'
    let two_page2 = doc.querySelector('.two-page')
    if (home.style.display == 'none') {
        select()
        tak()
    }
    nezaed.style.display = 'block'
    help_block[0].classList.remove('op')
    help_image[0].src = './img/White icon home.png'
    icon_men[0].src = './img/White icon home.png'
    men[0].style.opacity = '100%'
    help_image[1].src = './img/icon searches gray.png'
    icon_men[1].style.transform = 'scale(1)'
    icon_men[1].src = './img/icon searches gray.png'
    men[1].style.opacity = '70%'
    help_block[1].classList.add('op')
    help_block[2].classList.add('op')
    men[2].style.opacity = '70%'
    help_image[2].src = './img/Library_S.png'
    if (two_page2.style.display == 'block') {
        inp_search.value = ''
        dop_input.value = ''
        name_search3 = ''
        one_page1()
        if (home_search.style.display != 'none' || search_home.style.display != 'none') {
            search()
        }
    }
    head1.classList.remove('w-top')
    search_label.style.display = 'none'
    let one_page = doc.querySelector('.one-page')
    one_page.style.display = 'block'
    library.style.display = 'none'
    two_page2.style.display = 'none'
    home_search.style.display = 'none'
    rider.style.display = 'none'
})
let lik = doc.querySelector('.lik')
lik.onclick = () => {
    like_ned()
}
librarys.addEventListener('click', () => {
    let two_page2 = doc.querySelector('.two-page')
    let kol_vo_down = doc.querySelector('#kol-vo_down')
    let kol_vo_like = doc.querySelector('#kol-vo_like')
    if (two_page2.style.display == 'block') {
        inp_search.value = ''
        dop_input.value = ''
        name_search3 = ''
        one_page1()
        if (home_search.style.display != 'none' || search_home.style.display != 'none') {
            search()
        }
    }
    like_playlists = JSON.parse(localStorage.getItem('Library Liked Playlist'))
    kol_vo_down.innerHTML = `${download_music_arr.length}`
    kol_vo_like.innerHTML = `${Liked_tracks.length}`
    recently = JSON.parse(recintlay)
    if (recently == null) {
        recently = []
    } else {
        let kol_vo_res = doc.querySelector('#kol-vo_res')
        kol_vo_res.innerHTML = recently.length
    }
    let song_liked = doc.querySelector('#song-liked')
    let song_download = doc.querySelector('#song-download')
    nezaed.style.display = 'block'
    let song_recently = doc.querySelector('#song-recently')
    let download_array = JSON.parse(localStorage.getItem('Download Songs'))
    let recently_array = JSON.parse(localStorage.getItem('Recently Songs'))
    let liked_array = JSON.parse(localStorage.getItem('Liked Songs'))
    if (download_array == undefined || download_array == null) {
        song_download.innerHTML = ''
    } else {
        song_download.innerHTML = `${download_array[0].name} <span style="opacity: 0.5;">• ${download_array[0].artists[0].name}</span>`
    }
    if (recently_array == undefined || recently_array == null) {
        song_recently.innerHTML = ''
    } else {
        song_recently.innerHTML = `${recently_array[0].name} <span style="opacity: 0.5;">• ${recently_array[0].artists[0].name}</span>`
    }
    if (liked_array == undefined || liked_array == null) {
        song_liked.innerHTML = ''
    } else {
        if (liked_array.length > 0) {
            song_liked.innerHTML = `${liked_array[0].name} <span style="opacity: 0.5;">• ${liked_array[0].artists[0].name}</span>`
        } else {
            song_liked.innerHTML = ''
        }
    }
    help_block[2].classList.remove('op')
    help_image[2].src = './img/Library-active-icon.png'
    help_image[1].src = './img/icon searches gray.png'
    men[0].style.opacity = '70%'
    men[1].style.opacity = '70%'
    icon_men[1].style.transform = 'scale(1)'
    help_block[1].classList.add('op')
    help_block[0].classList.add('op')
    help_image[0].src = './img/no-white-icon-home.png'
    icon_men[1].src = './img/icon searches gray.png'
    icon_men[0].src = './img/no-white-icon-home.png'
    head1.classList.remove('w-top')
    search_home.style.display = 'none'
    search_label.style.display = 'none'
    men[2].style.opacity = '100%'
    men[3].style.opacity = '70%'
    men[3].style.opacity = '70%'
    home.style.display = 'none'
    library.style.display = 'block'
    let one_page = doc.querySelector('.one-page')
    one_page.style.display = 'block'
    home_search.style.display = 'none'
    rider.style.display = 'none'
    two_page2.style.display = 'none'
    if (like_playlists != null && like_playlists != undefined) {
        if (like_playlists.length > 0) {
            taxt.style.display = 'block'
            add_librar()
            select()
            tak()
        } else {
            playlist_let.innerHTML = ''
            taxt.style.display = 'none'
        }
    }
})
searchs.addEventListener('click', () => {
    help_block[0].classList.add('op')
    if (doc.body.offsetWidth <= 908) {
        rider.style.display = 'block'
    } else {
        rider.style.display = 'none'
    }
    resized2()
    let two_page2 = doc.querySelector('.two-page')
    if (two_page2.style.display == 'block') {
        inp_search.value = ''
        dop_input.value = ''
        name_search3 = ''
        one_page1()
        if (home_search.style.display != 'none' || search_home.style.display != 'none') {
            search()
        }
    }
    help_image[0].src = './img/no-white-icon-home.png'
    icon_men[0].src = './img/no-white-icon-home.png'
    men[0].style.opacity = '70%'
    help_image[1].src = './img/Search-active-icon.png'
    icon_men[1].src = './img/Search-active-icon.png'
    men[1].style.opacity = '100%'
    nezaed.style.display = 'block'
    men[2].style.opacity = '70%'
    icon_men[1].style.transform = 'scale(1.12)'
    help_block[1].classList.remove('op')
    help_block[2].classList.add('op')
    help_image[2].src = './img/Library_S.png'
    home.style.display = 'none'
    head1.classList.add('w-top')
    library.style.display = 'none'
    men[3].style.opacity = '70%'
    search_label.style.display = 'flex'
    two_page2.style.display = 'none'
    home_search.style.display = 'none'
    let one_page = doc.querySelector('.one-page')
    one_page.style.display = 'block'
    search_home.style.display = 'block'
    search()
})
let inp_search = doc.querySelector('.inp_search')
let cross_input = doc.querySelector('.cross-input')
setTimeout(() => {
    let categories_arr = []
    fetch('https://rakhimv.github.io/spotify/server/janres.json')
        .then(response => response.json())
        .then((result) => {
            for (let item of result.items) {
                categories_arr.push(item.data.data.cardRepresentation)
            }
        })
    setTimeout(() => {
        let categories_block = doc.querySelector('.categories-block')
        for (let item of categories_arr) {
            categories_block.innerHTML += `<div class="block-item" style="background-color: ${item.backgroundColor.hex};">
            <p class="categor-text">${item.title.transformedLabel}</p>
            <img src="${item.artwork.sources[0].url}" class="categories-image">
        </div>`
        }
        let block_items = doc.querySelectorAll('.block-item')
        for (let item of block_items) {
            item.onclick = () => {
                inp_search.value = item.children[0].innerHTML
                dop_input.value = item.children[0].innerHTML
                search()
            }
        }
    }, 500)
}, 1000)
cross_input.addEventListener('click', () => {
    inp_search.value = ''
    dop_input.value = ''
    search()
})
let top_btn_search = doc.querySelectorAll('.top-btn-search')
doc.body.addEventListener('resize', t5)
function t5() {
    if (doc.body.offsetWidth <= 908) {
        all_s.style.display = 'none'
        songs_s.style.display = 'block'
        top_btn_search[0].innerHTML = 'Best match'
    } else {
        top_btn_search[0].innerHTML = 'All'
        all_s.style.display = 'block'
        songs_s.style.display = 'none'
    }
    resized2()
}
t5()
let prev_top_btn = null
for (let i = 0; i < top_btn_search.length; i++) {
    top_btn_search[i].addEventListener('click', () => {
        function cat(title, one, two, three, four, five) {
            if (top_btn_search[i].innerHTML == title) {
                all_s.style.display = one
                playlists_s.style.display = two
                albums_s.style.display = three
                songs_s.style.display = four
                artists_s.style.display = five
                artists_S2.style.display = five
                if (artists_S2.style.display == 'grid') {
                    artists_S2.style.display = 'flex'
                }
            }
        }
        cat('All', 'block', 'none', 'none', 'none', 'none',)
        cat('Playlists', 'none', 'grid', 'none', 'none', 'none')
        cat('Albums', 'none', 'none', 'grid', 'none', 'none')
        cat('Songs', 'none', 'none', 'none', 'block', 'none')
        cat('Best match', 'none', 'none', 'none', 'block', 'none')
        cat('Artists', 'none', 'none', 'none', 'none', 'grid')
        doc.body.addEventListener('resize', t6)
        function t6() {
            if (doc.body.offsetWidth <= 908) {
                artists_s.style.display = 'none'
            } else {
                artists_s.style.display = 'grid'
            }
            resized2()
        }
        t6()
        if (prev_top_btn != null) {
            prev_top_btn.classList.remove('top-btn-search_focus')
        }
        if (i != 0) {
            top_btn_search[0].classList.remove('top-btn-search_focus')
        }
        top_btn_search[i].classList.add('top-btn-search_focus')
        prev_top_btn = top_btn_search[i]
    })
}
inp_search.addEventListener('input', search)
dop_input.addEventListener('input', () => {
    inp_search.value = dop_input.value
    search()
})
let timer;
let name_search3 = null
let parent_track;
let parent_songs = doc.querySelector('.parent-songs')
let search_artists2 = doc.querySelector('.search-artists')
let search_playlists2 = doc.querySelector('.search-playlists')
let previus_id = null
async function search() {
    if(doc.body.offsetWidth <= 908){
        rider.style.display = 'block'
    }
    if (inp_search.value != '') {
        search_home.style.display = 'none'
        home_search.style.display = 'block'
        cross_input.style.display = 'block'
    } else {
        home_search.style.display = 'none'
        search_home.style.display = 'grid'
        cross_input.style.display = 'none'
    }
    if (name_search3 != inp_search.value) {
        if (inp_search.value != '') {
            arr_tracks = []
            playlists_s.innerHTML = ''
            parent_songs.innerHTML = ''
            artists_S2.innerHTML = ''
            albums_s.innerHTML = ''
            artists_s.innerHTML = ''
            search_artists2.innerHTML = ''
            search_playlists2.innerHTML = ''
            clearTimeout(timer)
            timer = setTimeout(() => {
                name_search3 = inp_search.value
                // Playlists
                fetch('https://api.spotify.com/v1/search?q=' + inp_search.value + '*&type=album,artist,playlist,track&limit=50&offset=0&market=UZ', {
                    authority: "api.spotify.com",
                    method: "GET",
                    path: "/v1/search?q=ona*&type=album,artist,playlist,track&limit=50&offset=0&market=UZ",
                    scheme: "https",
                    headers: {
                        'Authorization': 'Bearer ' + accessToken,
                        'Content-Type': "application/json; charset=utf-8"
                    }
                })
                    .then(response => response.json())
                    .then((result) => {
                        if (result.playlists.items.length < 1 && result.albums.items.length < 1 && result.tracks.items.length < 1 && result.artists.items.length < 1) {
                            alert('Not found')
                            location.reload()
                        }
                        for (let item of result.playlists.items) {
                            playlists_s.innerHTML += `<div class="item h-item page-2-playlists h-item2">
                            <img src="${item.images[0].url}" class="image-playlist h-image">
                            <span class="link">${item.tracks.href}</span>
                            <p class="name-playlist">${item.name}</p>
                            <p class="name-artists">${item.description}</p>
                            <div class="btn_play2">
                                <input type="radio" name="radio" id="radio" class="radio">
                                <label for="radio" class="play"></label>
                            </div>
                        </div>`
                            search_playlists2.innerHTML += `<div class="item click-playlist">
                        <img src="${item.images[0].url}" class="image-playlist">
                        <span class="link">${item.tracks.href}</span>
                        <p class="name-playlist">${item.name}</p>
                        <p class="name-artists">${item.description}</p>
                    </div>`
                        }
                        for (let item of result.albums.items) {
                            albums_s.innerHTML += `<div class="item h-item albums_2_page h-item2">
                <img src="${item.images[0].url}" class="image-playlist h-image">
                <span class="link">${item.href}</span>
                <p class="name-playlist">${item.name}</p>
                <p class="name-artists">${item.type}</p>
                <div class="btn_play2">
                    <input type="radio" name="radio" id="radio2" class="radio">
                    <label for="radio2" class="play"></label>
                </div>
            </div>`
                        }
                        for (let item of result.tracks.items) {
                            if (item.preview_url != null) {
                                arr_tracks.push(item)
                                arr_tracks.forEach((n, u) => n.aydi = u + 1 - 1);
                            }
                            let cover = doc.querySelector('.cover')
                            let name_track_all = doc.querySelector('.nmae-track-all')
                            let block_append = doc.querySelector('.S')
                            SongsIndex = 0
                            setTimeout(() => {
                                if (arr_tracks[SongsIndex].album != null) {
                                    cover.src = arr_tracks[SongsIndex].album.images[0].url
                                }
                                name_track_all.innerHTML = arr_tracks[SongsIndex].name
                            }, 1500)
                            function po(num) {
                                let name_track_items = doc.querySelectorAll('.name-track-items')
                                let track_image_item = doc.querySelectorAll('.track-image-item ')
                                let name_artists_items = doc.querySelectorAll('.arts')
                                let item_child = doc.querySelectorAll('.item-child')
                                let minutes_d = doc.querySelectorAll('.minutes')
                                let secundes = doc.querySelectorAll('.secundes')
                                name_track_items[num].innerHTML = arr_tracks[num].name
                                track_image_item[num].src = arr_tracks[num].album.images[0].url
                                name_artists_items[num].innerHTML = arr_tracks[num].artists[0].name
                                let mili_duration = arr_tracks[num].duration_ms
                                let minutes = Math.floor(mili_duration / 60000)
                                let secunds = (mili_duration / 1000) - (minutes * 60)
                                minutes_d[num].innerHTML = minutes + ':'
                                if (secunds < 10) {
                                    secundes[num].innerHTML = '0' + Math.floor(secunds)
                                } else {
                                    secundes[num].innerHTML = Math.floor(secunds)
                                }
                            }
                        }
                        po(0)
                        po(1)
                        po(2)
                        po(3)
                        arr_tracks = remove_duplicates(arr_tracks)
                        for (let item of arr_tracks) {
                            hronos_track(item.duration_ms)
                            parent_songs.innerHTML += `<div class="parent-track one-pige">
                            <div class="child1">
                                <div class="animation-block">
                                    <p class="h-text text-22 gif">${item.aydi + 1}</p>
                                    <img src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif"" class="gif" style="display: none;">
                                </div>
                                <img src="${item.album.images[0].url}" class="art-track">
                                <div class="text-info-track">
                                    <p class="white-text-track name-shit" style="color: white;">${item.name}</p>
                                    <p class="h-text">${item.artists[0].name}</p>
                                </div>
                            </div>
                            <div class="child2">
                                <p class="h-text">${item.album.name}</p>
                            </div>
                            <div class="child3">
                                <p class="h-text">${item.album.release_date}</p>
                            </div>
                            <div class="child4">
                            <div class="heart-track2"></div>
                                <p class="white-text-track" style="color: #B3B3B3;">${min + ':' + secund}</p>
                            </div>
                        </div>`
                        }
                        setTimeout(() => {
                            o = 0
                            one_pig = doc.querySelectorAll('.one-pige')
                            for (let i = 0; i < one_pig.length; i++) {
                                one_pig[i].onclick = () => {
                                    o += 1
                                    is2 = i
                                    if (i < 5) {
                                        for (let it = 0; it < chilt.length; it++) {
                                            if (it == i) {
                                                name_track_items[it].style.color = 'rgb(26, 185, 80)'
                                                if (it === 0) {
                                                    nmae_track_all.style.color = 'rgb(26, 185, 80)'
                                                } else {
                                                    nmae_track_all.style.color = 'white'
                                                }
                                            } else {
                                                name_track_items[it].style.color = 'white'
                                            }
                                        }
                                    } else {
                                        nmae_track_all.style.color = 'white'
                                        for (let u = 0; u < name_track_items.length; u++) {
                                            name_track_items[u].style.color = 'white'
                                        }
                                    }
                                    if (o == 1) {
                                        two_page2(arr_tracks, '.one-pige')
                                    }
                                }
                            }
                            select_like(arr_tracks)
                            liked_proverka()
                        }, 3000)
                        for (let item of result.artists.items) {
                            artists_s.innerHTML += `<div class="item h-item artists_2_page h-item2">
                <img src="${item.images[0].url}" class="image-playlist radius h-image">
                <span class="link">${item.href}</span>
                <p class="name-playlist">${item.name}</p>
                <p class="name-artists">${item.type}</p>
            </div>`
                            doc.body.addEventListener('resize', t7)
                            function t7() {
                                if (doc.body.offsetWidth <= 908) {
                                    artists_S2.innerHTML += `
                                    <div class="parish">
                                        <img src="${item.images[0].url}" class="liso_ar">
                                        <p style="color: white;">${item.name}</p>
                                    </div>
                                    `
                                } else {
                                    artists_S2.innerHTML = ''
                                }
                                resized2()
                            }
                            t7()
                            search_artists2.innerHTML += `<div class="item click-art">
            <img src="${item.images[0].url}" class="image-playlist radius">
            <span class="link">${item.href}</span>
            <p class="name-playlist">${item.name}</p>
            <p class="name-artists">${item.type}</p>
        </div>`
                        }
                    })
                // select
                setTimeout(() => {
                    let click_art = doc.querySelectorAll('.click-art')
                    for (let item of click_art) {
                        item.addEventListener('click', () => {
                            top_btn_search[4].click()
                        })
                    }
                    let click_playlist = doc.querySelectorAll('.click-playlist')
                    for (let item of click_playlist) {
                        item.addEventListener('click', () => {
                            top_btn_search[1].click()
                        })
                    }
                    select()
                    tak()
                    setTimeout(() => {
                        let parish = doc.querySelectorAll('.parish')
                        let artists_2_page = doc.querySelectorAll('.artists_2_page')
                        for (let i = 0; i < parish.length; i++) {
                            parish[i].onclick = () => {
                                artists_2_page[i].click()
                            }
                        }
                    }, 1000)
                }, 5000)
            }, 1500)
        }
    }
}
// 2 PAGE
function two_page2(arr_2, par) {
    previus_id = null
    setTimeout(() => {
        parent_track = doc.querySelectorAll(par)
        for (let is = 0; is < parent_track.length; is++) {
            parent_track[is].addEventListener('click', miss)
            function miss() {
                control_mobile.classList.remove('stope')
                audition.style.backgroundImage = 'url(' + './img/play.png' + ')'
                previus_btn = null
                previus_btn2 = null
                function shablon() {
                    parent_track[is].children[0].children[0].children[0].style.display = 'block'
                    parent_track[is].children[0].children[0].children[1].style.display = 'none'
                    parent_track[is].children[0].children[2].children[0].style.color = 'white'
                    parent_track[previus_id].children[0].children[0].children[0].style.display = 'block'
                    parent_track[previus_id].children[0].children[0].children[1].style.display = 'none'
                    parent_track[previus_id].children[0].children[2].children[0].style.color = 'white'
                    parent_track[SongsIndex].children[0].children[0].children[0].style.display = 'none'
                    parent_track[SongsIndex].children[0].children[0].children[1].style.display = 'block'
                    parent_track[SongsIndex].children[0].children[2].children[0].style.color = '#1ab950'
                }
                if (previus_id != is) {
                    SongsIndex = is
                    // Шаблон
                    if (previus_id != null) {
                        parent_track[previus_id].children[0].children[0].children[0].style.display = 'block'
                        parent_track[previus_id].children[0].children[0].children[1].style.display = 'none'
                        parent_track[previus_id].children[0].children[2].children[0].style.color = 'white'
                    }
                    parent_track[SongsIndex].children[0].children[0].children[0].style.display = 'block'
                    parent_track[SongsIndex].children[0].children[0].children[1].style.display = 'none'
                    parent_track[SongsIndex].children[0].children[2].children[0].style.color = 'white'
                    parent_track[is].children[0].children[0].children[0].style.display = 'none'
                    parent_track[is].children[0].children[0].children[1].style.display = 'block'
                    parent_track[is].children[0].children[2].children[0].style.color = '#1ab950'
                    pl_img.src = parent_track[is].children[0].children[1].src
                    name_track.innerHTML = arr_2[SongsIndex].name
                    name_artists.innerHTML = arr_2[SongsIndex].artists[0].name
                    audio.src = arr_2[SongsIndex].preview_url
                    player_heart.onclick = () => {
                        heart_play(arr_2[SongsIndex], pl_img.src)
                    }
                    active_obj = arr_2[SongsIndex]
                    recently.unshift(arr_2[SongsIndex])
                    id_tracks = arr_2[SongsIndex].id
                }
                function back() {
                    if (SongsIndex >= arr_2.length) {
                        SongsIndex = 0
                    } else if (SongsIndex <= 0) {
                        SongsIndex = arr_2.length
                    }
                    SongsIndex -= 1
                    shablon()
                    previus_id = SongsIndex
                    audio.src = arr_2[SongsIndex].preview_url
                    active_obj = arr_2[SongsIndex]
                    recently.unshift(arr_2[SongsIndex])
                    id_tracks = arr_2[SongsIndex].id
                    name_track.innerText = arr_2[SongsIndex].name
                    name_artists.innerHTML = arr_2[SongsIndex].artists[0].name
                    player_image.src = arr_2[SongsIndex].album.images[0].url
                    player_heart.onclick = () => {
                        heart_play(arr_2[SongsIndex], pl_img.src)
                    }
                    audio.play()
                }
                random_btn.onclick = () => {
                    rand_i += 1
                    if (rand_i % 2 == 0) {
                        random_btn.classList.add('active_rand_btn')
                    } else {
                        random_btn.classList.remove('active_rand_btn')
                    }
                }
                function forward() {
                    if (rand_i % 2 == 0) {
                        random_btn.classList.add('active_rand_btn')
                        max1 = 0
                        max1 = arr_2.length
                        let rand_num = 0 + Math.random() * (max1 + 1 - 0)
                        let num = Math.floor(rand_num)
                        SongsIndex = num
                        if (SongsIndex < 0) {
                            SongsIndex = 0
                        }
                    }
                    if (SongsIndex >= arr_2.length - 1) {
                        SongsIndex = -1
                    } else if (SongsIndex < 0) {
                        SongsIndex = arr_2.length - 1
                    }
                    SongsIndex += 1
                    shablon()
                    previus_id = SongsIndex
                    audio.src = arr_2[SongsIndex].preview_url
                    active_obj = arr_2[SongsIndex]
                    recently.unshift(arr_2[SongsIndex])
                    id_tracks = arr_2[SongsIndex].id
                    name_track.innerText = arr_2[SongsIndex].name
                    name_artists.innerHTML = arr_2[SongsIndex].artists[0].name
                    player_image.src = arr_2[SongsIndex].album.images[0].url
                    player_heart.onclick = () => {
                        heart_play(arr_2[SongsIndex], pl_img.src)
                    }
                    audio.play()
                }
                audio.onended = () => {
                    forward()
                }
                forward_btn.onclick = () => {
                    forward()
                }
                back_btn.onclick = () => {
                    back()
                }
                audition.onclick = () => {
                    if (audio.paused != false) {
                        played_btn.classList.add('played-btn-js')
                        audio.play()
                    } else {
                        played_btn.classList.remove('played-btn-js')
                        audio.pause()
                    }
                }
                played_btn.onclick = () => {
                    if (audio.paused != false) {
                        played_btn.classList.add('played-btn-js')
                        audio.play()
                    } else {
                        played_btn.classList.remove('played-btn-js')
                        audio.pause()
                    }
                }
                played_btn.classList.add('played-btn-js')
                audio.play()
                previus_id = is
            }
            parent_track[is2].click()
        }
    }, 600)
}
let dowmload_mobile = doc.querySelector('.download-mobile')
dowmload_mobile.onclick = () => {
    download_tracks.click()
}
played_btn.onclick = () => {
    let parent_track = doc.querySelectorAll('.parent-track')
    parent_track[0].click()
}
strela[0].addEventListener('click', one_page1)
function one_page1() {
    if (home.style.display != 'block' && (home_search.style.display != 'none' || search_home.style.display != 'none')) {
        head1.classList.add('w-top')
        search_label.style.display = 'flex'
    }
    if (btn_top != null) {
        btn_top.checked = false
        btn_top.parentNode.classList.remove('btn_play_hover')
        btn_top.parentNode.classList.remove('btn_play2_hover')
        select()
        tak()
    }
    let one_page2 = doc.querySelector('.one-page')
    one_page2.style.display = 'block'
    let two_page2 = doc.querySelector('.two-page')
    two_page2.style.display = 'none'
    inp_search.value = ''
    name_search3 = ''
    if (search_home.style.display == 'grid' || home_search.style.display == 'block') {
        search()
    }
    if (library.style.display == 'block') {
        select()
        tak()
    }
}
download_tracks.onclick = () => {
    download(id_tracks)
}
let inp_2_page = doc.querySelector('.inp-2-page')
inp_2_page.oninput = () => {
    let two_pige = doc.querySelectorAll('.two-pige')
    for (let item of two_pige) {
        let name_tr = item.children[0].children[2].children[0].innerHTML.toLowerCase() // название песни
        let art = item.children[0].children[2].children[1].innerHTML.toLowerCase() // имя артиста
        let val = inp_2_page.value.toLowerCase()
        if (inp_2_page.value != '') {
            if (name_tr.search(val) == -1) {
                item.style.display = 'none'
            } else {
                item.style.display = 'flex'
            }
            if (art.search(val) != -1) {
                item.style.display = 'flex'
            }
        } else {
            item.style.display = 'flex'
        }
    }
}

function if_two_page() {
    setTimeout(() => {
        let name_2_page = doc.querySelector('.name-2-page').innerHTML
        let re = /[^<]+/
        if (btn_top != null) {
            let match = name_2_page.match(re)
            let active_name = btn_top.parentNode.previousElementSibling.previousElementSibling.innerHTML
            if (active_name == match[0]) {
                let two_pige = doc.querySelectorAll('.two-pige')
                for (let i = 0; i < two_pige.length; i++) {
                    two_pige[SongsIndex].click()
                }
            }
        }
    }, 2500)
}
let player_mobile = doc.querySelector('.player-mobile')
let name_playlist_mob = doc.querySelector('.name-playlist-mob')
let beautiful_image = doc.querySelector('.beautiful-image')
let na_title = doc.querySelector('.na-title')
let na_artist = doc.querySelector('.na-artist')
async function title() {
    name_playlist_mob.innerHTML = active_obj.album.name
    let mobile_player = doc.querySelector('.mobile-player')
    let title1 = doc.querySelector('#titul')
    beautiful_image.src = player_image.src
    let name_track = doc.querySelector('.name-tracks').innerHTML
    title1.innerHTML = 'Spotify - ' + name_track
    let mobile_name = doc.querySelector('.mobile-name')
    let mobile_artist = doc.querySelector('.mobile-artist')
    mobile_artist.innerHTML = name_artists.innerHTML
    mobile_name.innerHTML = name_track
    na_artist.innerHTML = name_artists.innerHTML
    na_title.innerHTML = name_track
    setTimeout(() => {
        let rgb = dominant_color.match(/\d+/g);
        let relativeLuminance = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
        let isWhiteColor = relativeLuminance > 220;
        if (isWhiteColor) {
            dominant_color = '#000000'; // белый цвет
        }
        lyric_block.style.backgroundColor = dominant_color
        player_mobile.style.backgroundImage = `linear-gradient(180deg, ${dominant_color}, black)`
        mobile_player.style.backgroundColor = dominant_color
        lyrics(name_artists.innerHTML, name_track)
    }, 1000)
}
function remove_duplicates(ar) {
    let names = {}
    return ar.filter(item => {
        let name = item.name
        if (names[name]) {
            return false
        } else {
            names[name] = true
            return true
        }
    })
}
let recently_2_page = doc.querySelector('.recently-2-page')
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function date() {
    var date = new Date()
    let day = date.getDate()
    let month = months[date.getMonth()]
    let hours = date.getHours()
    let ampm = new Date().toLocaleString('en-US', { hour: "numeric", hour12: true }).split(' ')[1]
    let date_min;
    if (date.getMinutes() < 10) {
        date_min = '0' + `${date.getMinutes()}`
    } else {
        date_min = date.getMinutes()
    }
    let str = `${month} ${day}, ${hours}:${date_min} ${ampm}`
    return str
}
let audio_src;
audio.oncanplaythrough = async() => {
    if (audio.src != audio_src) {
        let mobile_image = doc.querySelector('.mobile-image')
        mobile_image.src = player_image.src
        colors_dominant(mobile_image.src)
        player.classList.remove('minus')
        resized2()
        mobile_player.classList.add('scale-mobile')
        ris = remove_duplicates(recently)
        ris[0].album.release_date = date()
        localStorage.setItem('Recently Songs', JSON.stringify(ris))
        // 
        liked_proverka()
        title()
        // 
        audio.play()
    }
    audio_src = audio.src
}
// audio.addEventListener('error', () => {
//     alert('Ошибка')
//     location.reload()
// })
let black_block = doc.querySelector('.black-block')
let modal = doc.querySelector('.modal-create-playlist')
let creater = doc.querySelector('.creater')
creater.addEventListener('click', () => {
    if (MyAccounts.active != undefined) {
        if (MyAccounts.active.length > 0) {
            black_block.style.display = 'block'
            modal.style.display = 'block'
            setTimeout(() => {
                modal.classList.add('mod')
            }, 300)
        } else {
            alert('Зарегестрируйтесь!')
        }
    } else {
        alert('Зарегестрируйтесь!')
    }
})
black_block.onclick = () => {
    modal.classList.remove('mod')
    let modal_accounts = doc.querySelector('.modal-accounts')
    modal_accounts.classList.remove('mod2')
    modal.style.display = 'none'
    black_block.style.display = 'none'
    modal_accounts.style.display = 'none'
}
// 
let output = doc.querySelector('#output')
let file = doc.querySelector('#myFile')
function image(inp_file, src_image) {
    inp_file.addEventListener("change", function () {
        const FDATA = new FormData();
        let imgFile = inp_file.files[0]
        FDATA.append('file', imgFile);
        FDATA.append('upload_preset', 'xoj8fxfk');
        fetch('https://api.cloudinary.com/v1_1/dubgmfkfc/image/upload', {
            method: 'POST',
            body: FDATA
        })
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    src_image.style.filter = 'invert(0%)'
                }, 1000)
                src_image.src = data.url
            })
    })
}
let output2 = doc.querySelector('#output2')
let pli = doc.querySelector('.fli')
image(pli, output2)
image(file, output)
let your = doc.querySelector('#your-playltsts')
let btn_m = doc.querySelector('.btn-m')
let inp_m = doc.querySelector('.nam-pl')
let textarea = doc.querySelector('textarea')
btn_m.addEventListener('click', (e) => {
    e.preventDefault()
    if (output.src != 'file:///C:/Users/user/fronted/Spotify/img/nota-create.png') {
        if (inp_m.value != '' && inp_m.value.length > 2) {
            black_block.click()
            your.innerHTML += `<div class="help-block My">
            <img src="${output.src}" class="help-image">
            <p class="help-name">${inp_m.value}</p>
            <span style="display: none;">${textarea.value}</span>
        </div>`
            telefon_library.innerHTML += `<div class="help-block My2">
        <img src="${output.src}" class="help-image">
        <p class="help-name spas">${inp_m.value}</p>
    </div>`
            my_playlist.push({
                nam: inp_m.value,
                description1: textarea.value,
                image: output.src,
                items: []
            })
            MyAccounts.active[0].playlist = my_playlist
            for (let item of MyAccounts.not_active) {
                if (item.nam == MyAccounts.active[0].nam) {
                    item.playlist = my_playlist
                }
            }
            localStorage.setItem('My Accounts', JSON.stringify(MyAccounts))
            my_two()
            let my2 = doc.querySelectorAll('.My2')
            let my = doc.querySelectorAll('.My')
            for (let i = 0; i < my2.length; i++) {
                my2[i].onclick = () => {
                    my[i].click()
                }
            }
        }
    }
})
function my_two() {
    inp_m.value = ''
    textarea.value = ''
    let my_perehod = doc.querySelectorAll('.My')
    for (let item of my_perehod) {
        item.addEventListener('click', () => {
            page_2_songs.innerHTML = ''
            let image_2_page = doc.querySelector('.image-2-page')
            my.style.display = 'none'
            image_2_page.classList.remove('radius')
            colors_dominant(item.children[0].src)
            let aftor = doc.querySelector('.aftor')
            setTimeout(() => {
                aftor.setAttribute('style', 'background-image: linear-gradient(180deg, ' + dominant_color + ' 5.09%, #121212 32%);')
                aftor.classList.remove('aftor-js')
            }, 3000)
            page_2_songs.innerHTML = ''
            info_text_2_page.classList.remove('info-text-2-page-js')
            two_page_top_block.classList.remove('h-500')
            image_2_page.style.display = 'block'
            image_2_page.src = item.children[0].src
            let two_page_cat = doc.querySelector('.two-page-cat')
            two_page_cat.innerHTML = 'PLAYLIST'
            let name_two_page = doc.querySelector('.name-2-page')
            name_two_page.innerHTML = item.children[1].innerHTML
            let one_page = doc.querySelector('.one-page')
            let two_page = doc.querySelector('.two-page')
            one_page.style.display = 'none'
            two_page.style.display = 'block'
            search_label.style.display = 'none'
            head1.classList.remove('w-top')
            image_2_page.classList.remove('image-recently')
            for (let item of my_playlist) {
                let name_two_page = doc.querySelector('.name-2-page')
                if (item.nam == name_two_page.innerHTML) {
                    if (item.items.length > 0) {
                        arr_tracks_2_page = item.items
                        arr_tracks_2_page.forEach((n, u) => n.aydi = u + 1 - 1);
                        shitalka(null)
                        icon_52[0].style.display = 'none'
                        my.style.display = 'block'
                    } else {
                        let tracki = doc.querySelector('.tracki')
                        tracki.style.display = 'block'
                        my.style.display = 'block'
                        t2.style.display = 'none'
                    }
                } else {
                    let tracki = doc.querySelector('.tracki')
                    tracki.style.display = 'block'
                    t2.style.display = 'none'
                    my.style.display = 'block'
                }
            }
            icon_52[0].style.display = 'none'
            opisaniye2.innerHTML = item.children[2].innerHTML
            inp_my.value = ''
            myP()
        })
    }
}
let inp_my = doc.querySelector('#inp_my')
let for_playlist = doc.querySelector('#for-playlist')
let timer2;
inp_my.addEventListener('input', myP)
function myP() {
    for_playlist.innerHTML = ''
    if (inp_my.value == '') {
        for_playlist.innerHTML = ''
    } else {
        clearTimeout(timer2)
        timer2 = setTimeout(() => {
            fetch('https://api.spotify.com/v1/search?q=' + inp_my.value + '*&type=track&limit=50&offset=0&market=UZ', {
                authority: "api.spotify.com",
                method: "GET",
                path: "/v1/search?q=ona*&type=album,artist,playlist,track&limit=50&offset=0&market=UZ",
                scheme: "https",
                headers: {
                    'Authorization': 'Bearer ' + accessToken,
                    'Content-Type': "application/json; charset=utf-8"
                }
            })
                .then(response => response.json())
                .then((result) => {
                    result.tracks.items.forEach((n, u) => n.aydi = u + 1 - 1);
                    for (let item of result.tracks.items) {
                        for_playlist.innerHTML += `<div class="parent-track one-pige">
                            <div class="child1">
                                <img src="${item.album.images[0].url}" class="art-track">
                                <div class="text-info-track">
                                    <p class="white-text-track" style="color: white;">${item.name}</p>
                                    <p class="h-text">${item.artists[0].name}</p>
                                </div>
                            </div>
                            <span style="display: none;">${JSON.stringify(item)}</span>
                            <button class="Add">ADD</button>
                        </div>`
                    }
                    let add = doc.querySelectorAll('.Add')
                    for (let i = 0; i < add.length; i++) {
                        add[i].onclick = () => {
                            let obj = add[i].previousElementSibling.innerHTML
                            obj = JSON.parse(obj)
                            obj.album.release_date = date()
                            add[i].parentNode.style.display = 'none'
                            for (let item of my_playlist) {
                                let name_two_page = doc.querySelector('.name-2-page')
                                if (item.nam == name_two_page.innerHTML) {
                                    item.items.unshift(obj)
                                    function rem(ar) {
                                        let names = {}
                                        return ar.filter(item => {
                                            let name = item.name
                                            if (names[name]) {
                                                return false
                                            } else {
                                                names[name] = true
                                                return true
                                            }
                                        })
                                    }
                                    item.items = rem(item.items)
                                }
                            }
                            localStorage.setItem('My Accounts', JSON.stringify(MyAccounts))
                        }
                    }
                })
        }, 1500)
    }
}
// Registration
let friends_block = doc.querySelector('.friends-block')
if (JSON.parse(localStorage.getItem('My Accounts')) != null) {
    MyAccounts = JSON.parse(localStorage.getItem('My Accounts'))
    if (MyAccounts.active.length > 0) {
        let image_account = doc.querySelector('.image-account')
        let name_account = doc.querySelector('.name-account')
        let a = doc.querySelector('#a')
        image_account.src = MyAccounts.active[0].image
        liso_ar.src = MyAccounts.active[0].image
        if (image_account.getAttribute('src') != './img/3669480_account_circle_ic_icon.png') {
            image_account.style.filter = 'invert(0%)'
        }
        for (let item of MyAccounts.not_active) {
            if (item.nam != MyAccounts.active[0].nam) {
                let frier_block = doc.querySelectorAll('.frier-block')
                for (let item of frier_block) {
                    item.style.display = 'none'
                }
                setTimeout(() => {
                    friends_block.innerHTML += `<div class="frier-block">
                    <img src="${item.image}" class="frier" style="border-radius: 50%; background-image: none;"></img>
                    <div class="fri" style="justify-content: center;">
                        <h3 style="color: white;">${item.nam}</h3>
                    </div>
                </div>`
                }, 2000)
            }
        }
        you.innerHTML = `${MyAccounts.active[0].nam} `
        yout.innerHTML = `Made for ${MyAccounts.active[0].nam} `
        a.onclick = (e) => {
            e.preventDefault()
            colors_dominant(MyAccounts.active[0].image)
            let aftor = doc.querySelector('.aftor')
            setTimeout(() => {
                aftor.setAttribute('style', 'background-image: linear-gradient(180deg, ' + dominant_color + ' 5.09%, #121212 32%);')
                aftor.classList.remove('aftor-js')
            }, 3000)
            t2.style.display = 'block'
            info_text_2_page.classList.remove('info-text-2-page-js')
            two_page_top_block.classList.remove('h-500')
            let image_2_page = doc.querySelector('.image-2-page')
            image_2_page.style.display = 'block'
            image_2_page.src = MyAccounts.active[0].image
            let two_page_cat = doc.querySelector('.two-page-cat')
            two_page_cat.innerHTML = 'PROFILE'
            let name_two_page = doc.querySelector('.name-2-page')
            name_two_page.innerHTML = MyAccounts.active[0].nam
            let one_page = doc.querySelector('.one-page')
            let two_page = doc.querySelector('.two-page')
            opisaniye2.innerHTML = 'The hits of tomorrow are on Spotify today.'
            one_page.style.display = 'none'
            two_page.style.display = 'block'
            let for_two_page = doc.querySelector('.for-2-page')
            for_two_page.style.display = 'none'
            search_label.style.display = 'none'
            head1.classList.remove('w-top')
            if (image_account.getAttribute('src') != './img/3669480_account_circle_ic_icon.png') {
                image_2_page.classList.remove('image-recently')
            } else {
                image_2_page.classList.add('image-recently')
            }
            image_2_page.classList.add('radius')
            let tracki = doc.querySelector('.tracki')
            tracki.style.display = 'none'
            names_2_page = 'Accounts'
            doc.body.addEventListener('resize', t9)
            function t9() {
                if (doc.body.offsetWidth <= 908) {
                    opisaniye2.innerHTML = ''
                }
                resized2()
            }
            t9()
        }
        a.href = '#'
        name_account.innerHTML = MyAccounts.active[0].nam
        let two_page_top_block = doc.querySelector('.two-page-top-block')
        two_page_top_block.onclick = () => {
            let name_two_page = doc.querySelector('.name-2-page')
            if (name_two_page.innerHTML == MyAccounts.active[0].nam) {
                black_block.style.display = 'block'
                let modal_accounts = doc.querySelector('.modal-accounts')
                modal_accounts.style.display = 'block'
                let save = doc.querySelector('#save')
                save.onclick = () => {
                    let nam_pl2 = doc.querySelector('.nam-pl2')
                    let pass_pl2 = doc.querySelector('.pass-pl2')
                    for (let item of MyAccounts.not_active) {
                        if (item.nam == MyAccounts.active[0].nam) {
                            if (nam_pl2.value != '') {
                                item.nam = nam_pl2.value
                            } else {
                                item.nam = item.nam
                            }
                            if (pass_pl2.value != '') {
                                item.pass = pass_pl2.value
                            } else {
                                item.pass = item.pass
                            }
                            item.image = output2.src
                        }
                    }
                    if (nam_pl2.value != '') {
                        MyAccounts.active[0].nam = nam_pl2.value
                    }
                    if (pass_pl2.value != '') {
                        MyAccounts.active[0].pass = pass_pl2.value
                    }
                    if (output2.getAttribute('src') != './img/3669480_account_circle_ic_icon.png') {
                        MyAccounts.active[0].image = output2.src
                    }
                    localStorage.setItem('My Accounts', JSON.stringify(MyAccounts))
                    setTimeout(() => {
                        location.reload()
                    }, 1400)
                }
                let out = doc.querySelector('#out')
                out.onclick = () => {
                    MyAccounts.active = []
                    localStorage.setItem('My Accounts', JSON.stringify(MyAccounts))
                    setTimeout(() => {
                        location.reload()
                    }, 1400)
                }
                setTimeout(() => {
                    modal_accounts.classList.add('mod2')
                }, 200)
            }
        }
    }
}
let telefon_library = doc.querySelector('.telefon-library')
if (MyAccounts.active != undefined) {
    if (MyAccounts.active.length > 0) {
        my_playlist = MyAccounts.active[0].playlist
        let your = doc.querySelector('#your-playltsts')
        for (let i = 0; i < my_playlist.length; i++) {
            your.innerHTML += `<div class="help-block My">
                <img src="${my_playlist[i].image}" class="help-image">
                <p class="help-name">${my_playlist[i].nam}</p>
                <span style="display: none;">${my_playlist[i].description1}</span>
            </div>`
            telefon_library.innerHTML += `<div class="help-block My2">
            <img src="${my_playlist[i].image}" class="help-image">
            <p class="help-name spas">${my_playlist[i].nam}</p>
        </div>`
        }
        setTimeout(() => {
            my_two()
        }, 1000)
        let my2 = doc.querySelectorAll('.My2')
        let my = doc.querySelectorAll('.My')
        for (let i = 0; i < my2.length; i++) {
            my2[i].onclick = () => {
                my[i].click()
            }
        }
    }
}


// Liked
function app_liked(obj) {
    obj.album.release_date = date()
    Liked_tracks.unshift(obj)
    Liked_tracks = remove_duplicates(Liked_tracks)
    Liked_tracks.forEach((n, u) => n.aydi = u + 1 - 1);
}
function delete_liked(nam, obj) {
    for (let i = 0; i < Liked_tracks.length; i++) {
        if (Liked_tracks[i].album.images[0].url == nam && Liked_tracks[i].name === obj.name) {
            Liked_tracks[i] = null
        }
    }
    Liked_tracks = Liked_tracks.filter(function (item) {
        return item != null
    })
    Liked_tracks.forEach((n, u) => n.aydi = u + 1 - 1);
    Liked_tracks = remove_duplicates(Liked_tracks)
    localStorage.setItem('Liked Songs', JSON.stringify(Liked_tracks))
}
function heart_play(obj, nam) {
    if (player_heart.className === 'player-heart') {
        app_liked(obj)
    } else {
        delete_liked(nam, obj)
        let nam_shit = doc.querySelectorAll('.name-shit')
        for (let it of nam_shit) {
            it.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.children[0].classList.remove('green-heart')
        }
    }
    localStorage.setItem('Liked Songs', JSON.stringify(Liked_tracks))
    liked_proverka()
}
liked_2_page.addEventListener('click', like_ned)
function like_ned() {
    page_2_songs.innerHTML = ''
    opisaniye2.innerHTML = 'The hits of tomorrow are on Spotify today.'
    let aftor = doc.querySelector('.aftor')
    let two_page_top_block = doc.querySelector('.two-page-top-block')
    let info_text_2_page = doc.querySelector('.info-text-2-page')
    aftor.setAttribute('style', 'background-image:  linear-gradient(180deg, #604EC1 5.09%, #121212 32%);')
    aftor.classList.remove('aftor-js')
    info_text_2_page.classList.remove('info-text-2-page-js')
    two_page_top_block.classList.remove('h-500')
    let image_2_page = doc.querySelector('.image-2-page')
    image_2_page.style.display = 'block'
    image_2_page.classList.remove('image-recently')
    image_2_page.src = './img/Screenshot 2022-06-04 at 20 1.png'
    let two_page_cat = doc.querySelector('.two-page-cat')
    two_page_cat.innerHTML = 'PLAYLIST'
    let name_two_page = doc.querySelector('.name-2-page')
    name_two_page.innerHTML = 'Liked Songs'
    let one_page = doc.querySelector('.one-page')
    let two_page = doc.querySelector('.two-page')
    one_page.style.display = 'none'
    two_page.style.display = 'block'
    search_label.style.display = 'none'
    head1.classList.remove('w-top')
    function opa() {
        arr_tracks_2_page = JSON.parse(localStorage.getItem('Liked Songs'))
        arr_tracks_2_page.forEach((n, u) => n.aydi = u + 1 - 1);
        shitalka('like')
        icon_52[0].style.display = 'none'
    }
    if (home_search.style.display == 'none') {
        opa()
    } else {
        opa()
    }
    names_2_page = 'Liked'
    icon_52[0].style.display = 'none'
    if_two_page()
}
let playlist_let = doc.querySelector('.playlist-let')
async function liked_proverka() {
    player_heart.classList.remove('green-heart')
    liked_mobile.classList.remove('green-heart')
    Liked_tracks = JSON.parse(localStorage.getItem('Liked Songs'))
    if (Liked_tracks == null) {
        Liked_tracks = []
    }
    for (let item of Liked_tracks) {
        if (item.album.images[0].url == pl_img.src && item.name === name_track.innerHTML) {
            console.log(item.name,name_track);
            player_heart.classList.add('green-heart')
            liked_mobile.classList.add('green-heart')
        }
    }
    setTimeout(() => {
        Liked_tracks = JSON.parse(localStorage.getItem('Liked Songs'))
        if (Liked_tracks == null) {
            Liked_tracks = []
        }
        let nam_shit = doc.querySelectorAll('.name-shit')
        for (let item of Liked_tracks) {
            for (let it of nam_shit) {
                it.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.children[0].classList.remove('green-heart')
            }
            setTimeout(() => {
                for (let it of nam_shit) {
                    if (it.parentNode.previousElementSibling.src == item.album.images[0].url && it.innerHTML === item.name) {
                        it.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.children[0].classList.add('green-heart')
                    }
                }
            }, 100)
        }
    }, 500)
    icon_52[0].src = './img/no-green-heart.png'
    icon_52[0].classList.remove('WICH')
    let name_2_page = doc.querySelector('.name-2-page')
    if (like_playlists != null) {
        for (let item of like_playlists) {
            let re = /[^<]+/
            let match = name_2_page.innerHTML.match(re)
            match = match[0]
            if (item.nam.trim() === match.trim()) {
                icon_52[0].src = './img/green-heart.png'
                icon_52[0].classList.add('WICH')
            }
        }
        add_librar()
    }
}
function add_librar() {
    playlist_let.innerHTML = ''
    if (like_playlists.length > 0) {
        for (let item of like_playlists) {
            if (item.tipes == 'playlist') {
                playlist_let.innerHTML += `<div class="item h-item page-2-playlists">
                <img src="${item.image}" class="image-playlist">
                <span class="link">${item.linkes}</span>
                <p class="name-playlist">${item.nam}</p>
                <p class="name-artists">${item.tipes}</p>
            </div>`
            } else if (item.tipes == 'album') {
                playlist_let.innerHTML += `<div class="item h-item albums_2_page">
                <img src="${item.image}" class="image-playlist">
                <span class="link">${item.linkes}</span>
                <p class="name-playlist">${item.nam}</p>
                <p class="name-artists">${item.tipes}</p>
            </div>`
            } else {
                playlist_let.innerHTML += `<div class="item h-item artists_2_page">
                <img src="${item.image}" class="image-playlist radius">
                <span class="link">${item.linkes}</span>
                <p class="name-playlist">${item.nam}</p>
                <p class="name-artists">${item.tipes}</p>
            </div>`
            }
        }
    }
}
add_librar()
function select_like(arr) {
    let heart_track2 = doc.querySelectorAll('.heart-track2')
    for (let it of heart_track2) {
        it.onclick = (event) => {
            event.stopPropagation()
            let imya = it.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.children[2].children[0].innerHTML
            for (let item of arr) {
                if (item.name == imya) {
                    liked_two_page(item, item.album.images[0].url, it)
                }
            }
        }
    }
}
function liked_two_page(object, id, ths) {
    if (ths.className != 'heart-track2 green-heart') {
        app_liked(object)
    } else {
        delete_liked(id, object)
        let nam_shit = doc.querySelectorAll('.name-shit')
        for (let it of nam_shit) {
            it.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.children[0].classList.remove('green-heart')
        }
    }
    localStorage.setItem('Liked Songs', JSON.stringify(Liked_tracks))
    Liked_tracks = JSON.parse(localStorage.getItem('Liked Songs'))
    setTimeout(() => {
        liked_proverka()
    }, 100)
}
function like_playlist(id, img, lint, tip) {
    like_playlists.unshift({
        nam: id,
        image: img,
        linkes: lint,
        tipes: tip
    })
}
lik_l.addEventListener('click', () => {
    liked_2_page.click()
})
let liked_2 = doc.querySelector('#liked-2')
liked_2.addEventListener('click', () => {
    liked_2_page.click()
})
function lib(img, id, lint, tip) {
    icon_52 = doc.querySelectorAll('.icon-52')
    if (icon_52[0].className === 'icon-52') {
        like_playlist(id, img, lint, tip)
        icon_52[0].src = './img/green-heart.png'
        icon_52[0].classList.add('WICH')
    } else {
        icon_52[0].src = './img/no-green-heart.png'
        icon_52[0].classList.remove('WICH')
        let name_2_page = doc.querySelector('.name-2-page')
        for (let y = 0; y < like_playlists.length; y++) {
            if (like_playlists[y].nam === name_2_page.innerHTML) {
                like_playlists[y] = null
                like_playlists = like_playlists.filter(function (item) {
                    return item != null
                })
            }
        }
    }
    localStorage.setItem('Library Liked Playlist', JSON.stringify(like_playlists))
}
function prov(st) {
    if (like_playlists.length > 0) {
        for (let item of like_playlists) {
            if (item.playlist_inner == st) {
                icon_52[0].src = './img/green-heart.png'
                icon_52[0].classList.add('WICH')
            }
        }
    }
}

let links = [
    {
        urt: 'Тупая функция получилась...',
    },
    {
        urt: 'https://open.spotify.com/playlist/37i9dQZF1E354s0coKpICr',
    },
    {
        urt: 'https://open.spotify.com/playlist/37i9dQZF1E38OIIdVsqcWm',
    },
    {
        urt: 'https://open.spotify.com/playlist/37i9dQZF1E36cF8PLkUOzW',
    },
    {
        urt: 'https://open.spotify.com/playlist/37i9dQZF1E37vWFqIborI1',
    }
    ,
    {
        urt: 'https://open.spotify.com/playlist/37i9dQZF1E37ZkmvUTOezR',
    }
    ,
    {
        urt: 'https://open.spotify.com/playlist/37i9dQZF1E38KI8LFRxWe1',
    },
    {
        urt: 'https://open.spotify.com/playlist/37i9dQZEVXcOvyQlUYxm0c',
    }
    ,
    {
        urt: 'https://open.spotify.com/playlist/37i9dQZF1DWYRNXjFoiid2',
    }
]
// 
let second_links = [
    {
        urt: 'Тупая функция получилась...'
    },
    {
        urt: 'https://open.spotify.com/playlist/37i9dQZF1EIUPTZsI70Rrw'
    },
    {
        urt: 'https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP'
    },
    {
        urt: 'https://open.spotify.com/playlist/37i9dQZF1DXbYM3nMM0oPk'
    },
    {
        urt: 'https://open.spotify.com/playlist/37i9dQZF1DX0h2LvJ7ZJ15'
    },
    {
        urt: 'https://open.spotify.com/playlist/37i9dQZF1EQpesGsmIyqcW'
    },
    {
        urt: 'https://open.spotify.com/playlist/37i9dQZF1DWZd79rJ6a7lp'
    },
    {
        urt: 'https://open.spotify.com/playlist/37i9dQZF1EQmg9rwHdCwFW'
    },
]
function lin(linked, block) {
    let it = 0
    let timer = setInterval(() => {
        if (it <= linked.length) {
            it += 1
            let playlistLink = `${linked[it].urt.split('/').pop()}`
            fetch(`https://api.spotify.com/v1/playlists/${playlistLink}`, {
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + accessToken,
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then((result) => {
                    num = 0
                    block.innerHTML += `<div class="item page-2-playlists">
                                    <img src="${result.images[0].url}" class="image-playlist">
                                    <span class="link">${result.tracks.href}</span>
                                    <p class="name-playlist">${result.name}</p>
                                    <p class="name-artists">${result.description}</p>
                                    <div class="btn_play2">
                                        <input type="radio" name="radio" id="radio" class="radio">
                                        <label for="radio" class="play"></label>
                                    </div>
                                </div>`
                })
        } else {
            clearInterval(timer)
        }
    }, 950)
}
lin(links, made_for_you)
lin(second_links, top_mix)
let nmae_track_all = doc.querySelector('.nmae-track-all')
let name_track_items = doc.querySelectorAll('.name-track-items')
let chilt = doc.querySelectorAll('.chilt')
for (let i = 0; i < chilt.length; i++) {
    chilt[i].addEventListener('click', () => {
        if (one_pig != null) {
            one_pig[i].click()
            for (let it = 0; it < chilt.length; it++) {
                if (it == i) {
                    name_track_items[it].style.color = 'rgb(26, 185, 80)'
                    if (it === 0) {
                        nmae_track_all.style.color = 'rgb(26, 185, 80)'
                    } else {
                        nmae_track_all.style.color = 'white'
                    }
                } else {
                    name_track_items[it].style.color = 'white'
                }
            }
        }
    })
}
let ttt = doc.querySelector('.ttt')
ttt.onclick = () => {
    if (one_pig != null) {
        one_pig[0].click()
        nmae_track_all.style.color = 'rgb(26, 185, 80)'
        name_track_items[0].style.color = 'rgb(26, 185, 80)'
    }
}
let right_btn = doc.querySelector('.right-button')
right_btn.onclick = () => {
    let account = doc.querySelector('.account')
    account.click()
}
let like_k = doc.querySelector('.like-k')
let recently_k = doc.querySelector('.recently-k')
let download_k = doc.querySelector('.download-k')
like_k.onclick = () => {
    liked_2_page.click()
}
recently_k.onclick = () => {
    recently_2_page.click()
}
ic233.onclick = () => {
    recently_2_page.click()
}
download_k.onclick = () => {
    let download_2_page = doc.querySelector('.download-2-page')
    download_2_page.click()
}
let setting = doc.querySelector('.setting')
setting.onclick = () => {
    let account = doc.querySelector('.account')
    account.click()
}
liso_ar.onclick = () => {
    let account = doc.querySelector('.account')
    account.click()
}
nezaed.onclick = () => {
    strela[0].click()
}
let home_men = doc.querySelector('.home-men')
let search_men = doc.querySelector('.search-men')
let library_men = doc.querySelector('.library-men')
home_men.onclick = () => {
    homs.click()
}
search_men.onclick = () => {
    searchs.click()
}
let creater2 = doc.querySelector('.creater2')
creater2.onclick = () => {
    creater.click()
}
library_men.onclick = () => {
    librarys.click()
}
mobile_start_btn.onclick = (event) => {
    event.stopPropagation()
    audition.click()
}
let mobile_title = doc.querySelector('.mobile-title')
mobile_player.addEventListener('click', () => {
    player_mobile.classList.add('hello')
})
let kar = doc.querySelector('.kar')
kar.onclick = () => {
    player_mobile.classList.remove('hello')
}
liked_mobile.onclick = (event) => {
    event.stopPropagation()
    player_heart.click()
}
let lyric_arr = []
let text_song = doc.querySelector('.text-song')
let lyric_block = doc.querySelector('.lyric-block')
let top_textic = doc.querySelector('#top-textic')
async function lyrics(artistName, trackName) {
    lyric_arr = []
    text_song.innerHTML = ''
    $.ajax({
        type: "GET",
        data: {
            apikey: "627c6b66886db2addf08cdd3914ce1ee",
            q_artist: artistName,
            q_track: trackName,
            format: "jsonp",
            callback: "jsonp_callback"
        },
        url: "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json',
        success: function (data) {
            if (data.message.body.lyrics != undefined) {
                lyric_block.style.display = 'flex'
                let lyric = data.message.body.lyrics.lyrics_body
                lyric_arr = lyric.split('\n')
                lyric_arr = lyric_arr.slice(0, lyric_arr.length - 2)
                let color;
                let rgb = dominant_color.match(/\d+/g);
                let relativeLuminance = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
                let isWhiteColor = relativeLuminance > 168;
                if (isWhiteColor) {
                    color = 1
                    top_textic.style.color = 'black'
                    iyy.style.filter = 'invert(0%)'
                } else {
                    color = 0
                    iyy.style.filter = 'invert(100%)'
                    top_textic.style.color = 'white'
                }
                for (let item of lyric_arr) {
                    if (item != '') {
                        if (color == 1) {
                            text_song.innerHTML += `<p class="text-s" style="color: black; opacity: 40%">${item}</p>`
                        } else {
                            text_song.innerHTML += `<p class="text-s" style="color: white; opacity: 40%">${item}</p>`
                        }
                    }
                }
            } else {
                lyric_block.style.display = 'none'
            }
        }
    })
}
let iyy_i = 0
n_lyric.onclick = () => {
    lyric_block.classList.toggle('lyric-block-js')
    text_song.classList.toggle('text-song-js')
    iyy_i += 1
    if (iyy_i % 2 == 0) {
        iyy.className = `bx bx-list-plus`
    } else {
        iyy.className = `bx bx-list-minus`
    }
}
audio.addEventListener('pause', () => {
    audition.style.backgroundImage = 'url(' + './img/stop.png' + ')'
    if (btn_top != null) {
        btn_top.parentNode.classList.remove('btn_play2_hover')
        btn_top.parentNode.classList.remove('btn_play_hover')
    }
    control_mobile.classList.add('stope')
    mobile_start_btn.classList.add('mobile-stop-btn')
})
audio.addEventListener('play', () => {
    mobile_start_btn.classList.remove('mobile-stop-btn')
    control_mobile.classList.remove('stope')
    audition.style.backgroundImage = 'url(' + './img/play.png' + ')'
})
let content_center = doc.querySelector('.content-center')
setTimeout(() => {
    console.log(1);
}, 8000)

let video = doc.querySelector('video')
video.volume = 0
video.play()
video.addEventListener('ended', () => {
    video.classList.add('bodyt_op')
    setTimeout(() => {
        video.style.display = 'none'
    }, 1100)
})
video.addEventListener('contextmenu', function (event) {
    event.preventDefault()
})
let preloader = doc.querySelector('.preloader')
setTimeout(()=>{
    preloader.style.display = 'none'
}, 9000)
men[3].onclick = () =>{
    men[0].style.opacity = '70%'
    men[1].style.opacity = '70%'
    men[2].style.opacity = '70%'
    icon_men[1].style.transform = 'scale(1)'
    men[3].style.opacity = '100%'
    icon_men[1].src = './img/icon searches gray.png'
    icon_men[0].src = './img/no-white-icon-home.png'
    let download_2_page = doc.querySelector('.download-2-page')
    download_2_page.click()
    nezaed.style.display = 'none'
}
doc.body.oncontextmenu = (event) =>{
    event.preventDefault()
}