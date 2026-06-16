fetch('/api/ranking')
.then(res => res.json())
.then(data => {

    let html = '';

    if(data.length > 0){

        document.getElementById(
            'leader-name'
        ).innerText = data[0].name;

        document.getElementById(
            'leader-score'
        ).innerText = data[0].points;
    }

    let championCount = {};

    data.forEach((player,index)=>{

        championCount[player.champion] =
        (championCount[player.champion] || 0) + 1;

        let trendHTML =
        '<span class="same">─</span>';

        if(player.change > 0){
            trendHTML =
            `<span class="up">▲ +${player.change}</span>`;
        }

        if(player.change < 0){
            trendHTML =
            `<span class="down">▼ ${player.change}</span>`;
        }

        let rank = index + 1;

        if(rank === 1)
            rank = '🥇';

        else if(rank === 2)
            rank = '🥈';

        else if(rank === 3)
            rank = '🥉';

        html += `
        <tr>

            <td class="rank">
                ${rank}
            </td>

            <td class="player">
                ${player.name}
            </td>

            <td class="points">
                ${player.points}
            </td>

            <td>
                ${trendHTML}
            </td>

        </tr>
        `;
    });

    document.getElementById(
        'ranking-body'
    ).innerHTML = html;

    let topChampion = '-';
    let max = 0;

    for(let team in championCount){

        if(championCount[team] > max){

            max = championCount[team];
            topChampion = team;
        }
    }

    document.getElementById(
        'top-champion'
    ).innerText = topChampion;

});
