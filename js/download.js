const options = {
    headers: {
        'Content-Type': 'application/json'
    }
};
let dow_num = 0
let act;
let checkResponse;
async function download(id) {
    if (dow_num == 0) {
        dow_num = 1
        act = active_obj
        alert(`Вы точно хотите скачать песню: ${act.name}?`)
        let nim = act.name + ' - ' + act.album.artists[0].name
        let nam_track = nim.replace(/ /g, '%20')
        const url = `https://shazam.p.rapidapi.com/search?term=${nam_track}&locale=en-US&offset=0&limit=1`
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '35e458a5b2mshe2ae6832a7deed3p1c0301jsn2e080f73be79',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };

        try {
            fetch(url, options)
                .then(res => res.json())
                .then(track => {
                    console.log(track);
                    let links = track.tracks.hits[0].track.hub.actions[1].uri
                    function down() {
                        let ling = document.createElement('a')
                        ling.href = links
                        ling.download = `${act.name}`
                        ling.click()
                        dow_num = 0
                        download_music_arr.unshift(act)
                        download_music_arr[0].album.release_date = date()
                        download_music_arr[0].preview_url = links
                        if (download_music_arr.length > 0) {
                            download_music_arr = remove_duplicates(download_music_arr)
                            localStorage.setItem('Download Songs', JSON.stringify(download_music_arr))
                        }
                        alert(`Песня: ${act.name} скачана !\n Песня длится 1:30 !\n Потому что я не знаю как дать полную (⁠╥⁠﹏⁠╥⁠) !`)
                    }
                    setTimeout(() => {
                        down()
                    }, 15000)
                })
        } catch (error) {
            alert('Ошибка! Не фортануло, не прокатило...')
            dow_num = 0
            console.error(error);
        }
    } else {
        alert(`Пожалуйста подождите песня: ${act.name} скачивается...`)
    }
}