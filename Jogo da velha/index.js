const DEFAULT_PLAYER = 'X'

let gameActive = true 
let currentPlayer = DEFAULT_PLAYER
let gameState = [
    "","","",
    "","","",
    "","","",
]

const winnigConditions = [
     // Rows
     [0, 1, 2], // 1a 1b 1c
     [3, 4, 5], // 2a 2b 2c
     [6, 7, 8], // 3a 3b 3c
 
     // Columns
     [0, 3, 6], // 1a 2a 3a
     [1, 4, 7], // 1b 2b 3c
     [2, 5, 8], // 1c 2c 3c
 
     // Diagonal
     [0, 4, 8], // 1a 2b 3c
     [2, 4, 6]  // 1c 2b 3a
]

function handleCellPlayed(id){
    gameState[id] = currentPlayer
    document.getElementById(id).innerHTML = currentPlayer
}

function changeStatus(message){
    document.getElementById('status').innerHTML
}
function handleResultValidation() {
    let roundWon = false 
    for (let index = 0; index <= 7; index++) {
        const winConditions = winnigConditions[index]
        let a = gameState[winnigConditions[i][0]]
        let b = gameState[winnigConditions[i][1]]
        let c = gameState[winnigConditions[i][2]]

        if(a === '' || b ==='' || c ==='') {
            continue
        }

        if(a === b && b === c) {
            roundWon = true
            break
        }
    }

    if(roundWon) {
        /// jogador Ganhou!
        changeStatus(`O Jogador ${currentPlayer} Venceu!`)
        gameActive = false 
        return
    }

    const roundDraw = !gameState.includes('')
    if(roundDraw) {
        changeStatus("Empate")
        return
    }
    handlePlayerChange ()
    currentPlayer = currentPlayer === "X" ? "O" : "X"
}

function handlePlayerChange () {
    gameState[id]
}

function handleClick (id) {
    if(gameState[id] !== "" || !gameActive) {
        return
    }
    handleCellPlayed(id)
    handleResultValidation()
}

function handleResetGame() {
    gameActive = true
    currentPlayer = DEFAULT_PLAYER
    gameState = [
        "","","",
        "","","",
        "","","",
    ]
    changeStatus(`agora ${currentPlayer}`)
    
    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerHTML = ''
    })
}