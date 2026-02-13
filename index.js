const quotes = [
  "Believe in yourself.",
  "Stay hungry, stay foolish.",
  "Dream big and dare to fail.",
  "Success is not final, failure is not fatal.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Don’t stop until you’re proud.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Small steps every day lead to big results.",
  "Your only limit is your mind.",
  "Doubt kills more dreams than failure ever will.",
  "Stay positive, work hard, make it happen.",
  "Discipline is the bridge between goals and accomplishment.",
  "Success starts with self-belief.",
  "Be stronger than your excuses.",
  "Focus on progress, not perfection.",
  "The best way to get started is to quit talking and begin doing.",
  "Don’t wait for opportunity. Create it.",
  "Make today count.",
  "Work hard in silence, let success make the noise.",
  "Failure is proof that you are trying.",
  "Be fearless in the pursuit of what sets your soul on fire.",
  "Consistency is the key to success.",
  "Learn from yesterday, live for today, hope for tomorrow.",
  "You are capable of amazing things.",
  "Success is built on daily habits.",
  "Turn your wounds into wisdom.",
  "Difficult roads often lead to beautiful destinations.",
  "Stay patient and trust your journey.",
  "Nothing worth having comes easy.",
  "Action is the foundational key to success.",
  "Success is the sum of small efforts repeated daily.",
  "Don’t limit your challenges. Challenge your limits.",
  "If you can dream it, you can do it.",
  "Start where you are. Use what you have. Do what you can.",
  "It always seems impossible until it’s done.",
  "Your future depends on what you do today.",
  "Keep going. Everything you need will come to you.",
  "Be the reason someone smiles today.",
  "Strive for progress, not perfection.",
  "Opportunities don’t happen. You create them.",
  "The harder you work, the luckier you get.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Don’t be afraid to give up the good to go for the great.",
  "Every accomplishment starts with the decision to try.",
  "Stay focused and never give up.",
  "Believe you can and you’re halfway there.",
  "Make your life a masterpiece."
];

const usedIndexes = new Set();
const quoteTag = document.getElementById("display");

function generateQuote()
{
    if (usedIndexes.size >= quotes.length)
    {
        usedIndexes.clear();
    }
    
    while (true)
    {
        const randdomIdx = Math.floor(Math.random() * quotes.length);

        if(usedIndexes.has(randdomIdx)) continue

        const quote = quotes[randdomIdx];
        quoteTag.innerHTML = quote;
        usedIndexes.add(randdomIdx);
        break;
    }
}
    