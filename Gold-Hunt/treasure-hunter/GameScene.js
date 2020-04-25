// Create your global variables here
let plot;
let grid = [];
let coinCollection = [];
let playerCoins = 0;
let compCoins = 0;

class GameScene extends Phaser.Scene {
    constructor() {
      super({
        key: 'GameScene'
      })
    }

    preload() {
      // We have preloaded our images such as the background, the coins, the digging image etc.
      this.load.image('board', 'https://codecademy-content.s3.amazonaws.com/courses/learn-phaser/Treasure+Hunter/Gameboard+Default.png', {
        frameWidth: 240,
        frameHeight: 320
      });
      this.load.image('gold', 'https://codecademy-content.s3.amazonaws.com/courses/learn-phaser/Treasure+Hunter/gold+coin.png');
      this.load.image('playerGold', 'https://codecademy-content.s3.amazonaws.com/courses/learn-phaser/Treasure+Hunter/gold+coin+shine.png');
      this.load.image('dig', 'https://codecademy-content.s3.amazonaws.com/courses/learn-phaser/Treasure+Hunter/dug+hole.png');
      this.load.image('blank', 'https://codecademy-content.s3.amazonaws.com/courses/learn-phaser/Treasure+Hunter/blank.png'); // These are the actual images / tiles that load on top of 'board'
    }

    create() {
      // The background is provided below
      this.add.sprite(240, 320, 'board');
      // Here we will create the for loops to create the grid
      for (let x = 46; x < 437; x += 78) {
        for (let y = 46; y < 437; y += 78) {
          plot = this.add.sprite(x, y, 'blank');
          grid.push(plot)
        }
      }
      // Here we will create the coins from the grid created above
      function decideCoinLocations() {
      // Choose random indices from 2d array
        while (coinCollection.length < 5) {
          let randIdx = Math.floor(Math.random() * grid.length)
          let selectedPlot = grid[randIdx]
          if(coinCollection.indexOf(selectedPlot) === -1){
            coinCollection.push(selectedPlot)
          } 
        }
      }
        decideCoinLocations()
      } // End of Create

      update() {
        let determineWInner = this.determineWinner() //determine winner
        let playerScore = this.add
          .text(195, 487, ' ' + playerCoins + '  ', {
            font: '16px Helvetica',
            fill: '#000000',
            padding: {
              x: 6,
              y: 7
            },
            backgroundColor: '#ffffff'
          })
        let compScore = this.add
          .text(430, 487, ' ' + compCoins + '  ', {
            font: '16px Helvetica',
            fill: '#000000',
            padding: {
              x: 6,
              y: 7
            },
            backgroundColor: '#ffffff'
          })
        // Input / marker creation
        this.input.setHitArea(grid).on('gameobjectover', function (pointer, gameObject) {
          gameObject.setTint(0xff0000);
        });
        this.input.setHitArea(grid).on('gameobjectout', function (pointer, gameObject) {
          gameObject.clearTint();
        });
        this.input.setHitArea(grid).on('gameobjectdown', function (pointer, gameObject) {
          if (gameObject.texture.key === 'blank') {
            game.input.enabled = false;
            let clickedPlot = gameObject

            function playerCheck() {
              for (var i = 0; i < coinCollection.length; i++) {
                if (clickedPlot === coinCollection[i]) {
                  playerCoins++
                  clickedPlot.setTexture('playerGold')
                  break;
                } else {
                  clickedPlot.setTexture('dig')
                }
              }
              if (playerCoins !== 3) {
                setTimeout(function () {
                  compTurn()
                }, 450);
              }
            }
            playerCheck();
          } else {
            function input() {
              game.input.enabled = true;
            }
            setTimeout(function () {
              input()
            }, 1000)
          }
        })

        // Computer turn
        function compTurn() {
          let compChoice;
          let item;
          let items = [];
          function singleIndex() {
            item = Math.floor(Math.random() * grid.length);
            for (let i = 0; i < 1; i++) {
              if (items.indexOf(item) !== null) {
                compChoice = {
                  c: grid[item],
                  key: grid[item].texture.key
                }
                items.push(item)
              } else {
                singleIndex()
              }
            }
          }
          singleIndex()
          if (compChoice.key !== 'blank') {
            compTurn()
          } else {
            for (let i = 0; i < coinCollection.length; i++) {
              if (compChoice.c === coinCollection[i]) {
                compCoins++
                grid[item].setTexture('gold')
                break;
              } else {
                grid[item].setTexture('dig')
              }
            }
          }

          function input() {
            game.input.enabled = true;
          }
          setTimeout(function () {
            input()
          }, 1000)
        }
      } // End Update 

      // Helper Functions
      endGame() {
        this.scene.stop('GameScene');
        this.scene.start('EndScene');
        game.input.enabled = true;
      }

      determineWinner() {
        if (playerCoins === 3 || compCoins === 3) {
          this.endGame()
        }
      }

    } // End GameScene