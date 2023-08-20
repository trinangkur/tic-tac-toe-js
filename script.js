let player1 = { symbol: 'X', moved: [], name: 'player 1' }
let player2 = { symbol: 'O', moved: [], name: 'player 2' }
let currentPlayer = player1

let winnningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

function handlePlayerClick(event) {
    let clickedTile = event.target
    clickedTile.innerText = currentPlayer.symbol
    currentPlayer.moved.push(parseInt(clickedTile.getAttribute('id')))
    hasWon(currentPlayer)
    currentPlayer = currentPlayer == player1 ? player2 : player1
}

function hasWon(currentPlayer) {
    for (let i = 0; i < winnningCombinations.length; i++) {
        console.log(currentPlayer.moved.includes(winnningCombinations[i][0]))
        if (currentPlayer.moved.includes(winnningCombinations[i][0]) &&
            currentPlayer.moved.includes(winnningCombinations[i][1]) &&
            currentPlayer.moved.includes(winnningCombinations[i][2])) {
            // alert(currentPlayer.name + ' won the match')
            document.querySelector('#winner').innerText = currentPlayer.name + ' won the match'
        }
    }
}

function addEvenListenerToTiles() {
    let tiles = document.querySelectorAll('.tile')
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener('click', function (event) {
            handlePlayerClick(event)
        });
    }
}

function main() {
    addEvenListenerToTiles()
}

window.onload = main