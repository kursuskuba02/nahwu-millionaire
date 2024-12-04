class Game {
    constructor() {
        this.questions = this.shuffleQuestions(questions);
        this.currentQuestion = 0;
        this.timeLeft = 30;
        this.timer = null;
        this.moneyTree = [
            50000, 100000, 250000, 500000, 1000000,
            2000000, 5000000, 10000000, 25000000, 50000000,
            100000000, 250000000, 500000000, 1000000000
        ];
        this.checkpoints = [50000, 1000000, 50000000];
        this.lifelinesUsed = {
            fiftyFifty: false,
            phoneAFriend: false,
            askAudience: false
        };
        this.selectedAnswer = null;
        
        // Initialize event listeners for game page
        if (document.getElementById('game-screen')) {
            this.initializeGameListeners();
            this.startGame(); // Start game immediately on game.html
        }
    }

    initializeGameListeners() {
        // Add money tree toggle for mobile
        const toggleButton = document.getElementById('toggle-money-tree');
        const moneyTree = document.getElementById('money-tree');
        
        if (toggleButton && moneyTree) {
            toggleButton.addEventListener('click', () => {
                moneyTree.classList.toggle('show');
            });

            // Close money tree when clicking outside
            document.addEventListener('click', (e) => {
                if (!moneyTree.contains(e.target) && e.target !== toggleButton) {
                    moneyTree.classList.remove('show');
                }
            });
        }

        document.getElementById('fifty-fifty').addEventListener('click', () => this.useFiftyFifty());
        document.getElementById('phone-friend').addEventListener('click', () => this.usePhoneAFriend());
        document.getElementById('ask-audience').addEventListener('click', () => this.useAskAudience());
        
        document.querySelectorAll('.answer').forEach(button => {
            button.addEventListener('click', () => this.showConfirmation(parseInt(button.dataset.answer)));
        });

        // Add confirmation modal listeners
        document.getElementById('confirmYes').addEventListener('click', () => this.handleConfirmation(true));
        document.getElementById('confirmNo').addEventListener('click', () => this.handleConfirmation(false));
    }

    shuffleQuestions(questions) {
        let shuffled = [...questions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    startGame() {
        this.questions = this.shuffleQuestions(questions);
        this.currentQuestion = 0;
        this.timeLeft = 30;
        this.lifelinesUsed = {
            fiftyFifty: false,
            phoneAFriend: false,
            askAudience: false
        };
        this.displayQuestion();
        this.startTimer();
    }

    startTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.timeLeft = 30;
        document.getElementById('timer').textContent = this.timeLeft;
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            document.getElementById('timer').textContent = this.timeLeft;
            
            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                this.timeUp();
            }
        }, 1000);
    }

    displayQuestion() {
        const currentQ = this.questions[this.currentQuestion];
        const questionEl = document.getElementById('question');
        questionEl.textContent = currentQ.question;
        questionEl.style.direction = 'ltr';
        questionEl.style.textAlign = 'left';
        
        // Update current prize display
        const currentPrize = this.moneyTree[this.currentQuestion];
        document.getElementById('current-prize').textContent = `Rp ${currentPrize.toLocaleString()}`;
        
        const answers = document.querySelectorAll('.answer');
        answers.forEach((button, index) => {
            button.textContent = currentQ.answers[index];
            button.style.direction = 'ltr';
            button.style.textAlign = 'left';
            button.style.display = 'block';
            button.disabled = false;
            
            // Reset answer wrapper classes
            button.closest('.answer-wrapper').classList.remove('correct', 'wrong');
        });

        // Reset lifeline buttons visual state
        document.getElementById('fifty-fifty').disabled = this.lifelinesUsed.fiftyFifty;
        document.getElementById('phone-friend').disabled = this.lifelinesUsed.phoneAFriend;
        document.getElementById('ask-audience').disabled = this.lifelinesUsed.askAudience;

        this.updateMoneyTree();
    }

    updateMoneyTree() {
        const moneyTreeItems = document.querySelectorAll('#money-tree li');
        moneyTreeItems.forEach((item, index) => {
            if (index === moneyTreeItems.length - 1 - this.currentQuestion) {
                item.classList.add('current');
            } else {
                item.classList.remove('current');
            }
        });
    }

    useFiftyFifty() {
        if (this.lifelinesUsed.fiftyFifty) return;
        
        const currentQ = this.questions[this.currentQuestion];
        const answers = document.querySelectorAll('.answer');
        const correctAnswer = currentQ.correct;
        
        // Get indexes of wrong answers
        let wrongIndexes = [];
        answers.forEach((_, index) => {
            if (index !== correctAnswer) {
                wrongIndexes.push(index);
            }
        });
        
        // Randomly remove 2 wrong answers
        wrongIndexes = this.shuffleQuestions(wrongIndexes).slice(0, 2);
        wrongIndexes.forEach(index => {
            answers[index].style.display = 'none';
        });
        
        this.lifelinesUsed.fiftyFifty = true;
        document.getElementById('fifty-fifty').disabled = true;
    }

    usePhoneAFriend() {
        if (this.lifelinesUsed.phoneAFriend) return;
        
        const currentQ = this.questions[this.currentQuestion];
        alert(`Teman Anda menyarankan jawaban ${String.fromCharCode(65 + currentQ.correct)}`);
        
        this.lifelinesUsed.phoneAFriend = true;
        document.getElementById('phone-friend').disabled = true;
    }

    useAskAudience() {
        if (this.lifelinesUsed.askAudience) return;
        
        const currentQ = this.questions[this.currentQuestion];
        const correctAnswer = String.fromCharCode(65 + currentQ.correct);
        
        alert(`Hasil voting penonton:\nA: 25%\nB: 15%\nC: 40%\nD: 20%\n\nMayoritas penonton memilih jawaban ${correctAnswer}`);
        
        this.lifelinesUsed.askAudience = true;
        document.getElementById('ask-audience').disabled = true;
    }

    showConfirmation(answerIndex) {
        this.selectedAnswer = answerIndex;
        const modal = document.getElementById('confirmModal');
        modal.style.display = 'flex';
    }

    handleConfirmation(confirmed) {
        const modal = document.getElementById('confirmModal');
        modal.style.display = 'none';
        
        if (confirmed && this.selectedAnswer !== null) {
            this.checkAnswer(this.selectedAnswer);
        }
        this.selectedAnswer = null;
    }

    showResultPopup(isCorrect) {
        const popup = document.getElementById(isCorrect ? 'correct-popup' : 'wrong-popup');
        if (popup) {
            popup.style.display = 'block';
            setTimeout(() => {
                popup.style.display = 'none';
            }, 1500);
        }

        // Add result text to the answer button
        const answerWrapper = document.querySelector(`.answer-wrapper:nth-child(${this.selectedAnswer + 1})`);
        if (answerWrapper) {
            const resultText = document.createElement('div');
            resultText.className = `answer-result ${isCorrect ? 'correct' : 'wrong'}`;
            resultText.textContent = isCorrect ? 'BENAR' : 'SALAH';
            answerWrapper.appendChild(resultText);

            // Remove the result text after animation
            setTimeout(() => {
                resultText.remove();
            }, 1500);
        }
    }

    checkAnswer(answerIndex) {
        clearInterval(this.timer);
        const currentQ = this.questions[this.currentQuestion];
        const answers = document.querySelectorAll('.answer');
        
        // Disable all answers during animation
        answers.forEach(button => {
            button.classList.add('animating');
        });

        // Show correct and wrong answers with animation
        const selectedWrapper = answers[answerIndex].closest('.answer-wrapper');
        const correctWrapper = answers[currentQ.correct].closest('.answer-wrapper');

        if (answerIndex === currentQ.correct) {
            selectedWrapper.classList.add('correct');
            this.showResultPopup(true);
            setTimeout(() => {
                this.handleCorrectAnswer();
                // Remove animation classes
                document.querySelectorAll('.answer-wrapper').forEach(wrapper => {
                    wrapper.classList.remove('correct', 'wrong');
                });
                answers.forEach(button => {
                    button.classList.remove('animating');
                });
            }, 1500);
        } else {
            selectedWrapper.classList.add('wrong');
            correctWrapper.classList.add('correct');
            this.showResultPopup(false);
            setTimeout(() => {
                this.handleWrongAnswer();
                // Remove animation classes
                document.querySelectorAll('.answer-wrapper').forEach(wrapper => {
                    wrapper.classList.remove('correct', 'wrong');
                });
                answers.forEach(button => {
                    button.classList.remove('animating');
                });
            }, 1500);
        }
    }

    handleCorrectAnswer() {
        this.currentQuestion++;
        if (this.currentQuestion < this.questions.length) {
            this.displayQuestion();
            this.startTimer();
        } else {
            this.gameOver(this.moneyTree[this.moneyTree.length - 1]);
        }
    }

    handleWrongAnswer() {
        const guaranteedMoney = this.getGuaranteedMoney();
        this.gameOver(guaranteedMoney);
    }

    timeUp() {
        clearInterval(this.timer);
        const guaranteedMoney = this.getGuaranteedMoney();
        this.gameOver(guaranteedMoney);
    }

    gameOver(wonAmount) {
        clearInterval(this.timer);
        setTimeout(() => {
            alert(`Permainan Selesai!\nAnda mendapatkan: Rp ${wonAmount.toLocaleString()}`);
            window.location.href = 'index.html';
        }, 1000);
    }

    getGuaranteedMoney() {
        let guaranteedMoney = 0;
        for (let checkpoint of this.checkpoints) {
            if (this.moneyTree[this.currentQuestion] > checkpoint) {
                guaranteedMoney = checkpoint;
            }
        }
        return guaranteedMoney;
    }
}

// Initialize game
document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
});
