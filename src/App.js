import './App.css';
import Book from './components/Book';
import Navbar from './components/Navbar';
import { useState } from 'react'


const App = () => {

  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Citizen Kane',
      author:'Orson Wells',
      description: 'Kane was sent to a boarding school at a young age after his mother struck it rich thanks to a mining claim that was signed over to her in lieu of rent. He came into his vast fortune at the age of 25 and promptly bought a newspaper. A tragedy about a man of great passion, vision, and greed, who pushes himself until he falls off the top of the world and brings ruin to all around him. Citizen Kane is a powerful dramatic tale about the uses and abuses of wealth and power.'
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      description: 'In a totalitarian future society, a man, whose daily work is re-writing history, tries to rebel by falling in love. The central focus of the book is to convey the extreme level of control and power possible under a truly totalitarian regime. It explores how such a governmental system would impact society and the people who live in it.'
    },
    {
      id: 3,
      title: 'Slaugtherhouse 5',
      author: 'Kurt Vonnegut',
      description: 'Billy Pilgrim has mysteriously become unstuck in time. He goes on an uncontrollable trip back and forth from his birth in New York to life on a distant planet and back again to the horrors of the 1945 fire-bombing of Dresden. Its final passage describes the end of the war and the liberation of the prisoners, who include Billy Pilgrim and Vonnegut himself, thus telling us that hope is not lost.'
    },
    {
      id: 4,
      title: 'The spy who came in from the cold',
      author:'John le Carré',
      description: 'After watching his last agent being shot dead, Alec Leamas is given the chance to take revenge. A gripping story of love and betrayal at the height of the Cold War, and a devastating tale of duplicity and espionage. In this novel there are no good guys and no bad guys, only nihilists in a random, irrational, and chaotic existence.'
    },
    {
      id: 5,
      title: 'Fahrenheit 451',
      author:'Ray Bradbury',
      description: 'Guy Montag transmutates from a book-burning fireman to a book-reading rebel. Montag lives in an oppressive society that attempts to eliminate all sources of complexity, contradiction, and confusion to ensure uncomplicated happiness for all its citizens. The novel explores the potential for technological advancement to make humans less free.'
    },
    {
      id: 6,
      title: 'Catch-22',
      author:'Joseph Heller',
      description: 'Set in the closing months of World War II in an American bomber squadron off the coast of Italy, Catch-22 is the story of a bombardier named Yossarian who is frantic and furious because thousands of people he has never even met keep trying to kill him. A hilarious and tragic satire on military madness, and the tale of one man\'s efforts to survive it.'
    },
    {
      id: 7,
      title: 'The right stuff',
      author:'Tom Wolfe',
      description: 'What went on in the minds of the astronauts themselves - in space, on the moon, and even during certain odysseys on earth? A breath-taking epic, a magnificent adventure story, and an investigation into the true heroism and courage of the first humans to conquer space. Wolfe suggests that maybe it is the danger and sacrifice itself that makes space exploration so intriguing and arresting.'
    },
    {
      id: 8,
      title: 'Brave New World',
      author:'Aldous Huxley',
      description: 'The novel examines a futuristic society, called the World State, that revolves around science and efficiency. In this society, emotions and individuality are conditioned out of children at a young age, and there are no lasting relationships because “every one belongs to every one else. An alarm raised against the dangers of technology.'
    },
    {
      id: 9,
      title: 'Frankenstein',
      author:'Mary Shelley',
      description: 'The story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment. Two central tragedies are embedded within -one is the danger that lies with considering the negative consequences of science and technology after-the-fact, instead of before, the other of parental abandonment and societal rejection.'
    },
    {
      id: 10,
      title: 'Der Process',
      author:'Franz Kafka',
      description: 'One morning Josef K., the chief cashier in a bank, is arrested by two mysterious agents for some unspecified crime. He is not thrown into prison pending his trial, but allowed to carry on with his day-to-day affairs until summoned by the Committee of Affairs. Kafka\'s novel exposes the absurd ways in which all life is a continual trial, \'trying\' us by testing and challenging us, tempting us to commit things we shouldn’t and making us feel guilty even when we’re not sure precisely what we have done to feel such guilt.'
    },
    {
      id: 11,
      title: 'The longshot that succeeded',
      author:'{pseudonym}',
      description: 'Alex is an engineer in an era of rapid technological transformation, working with producing surveillance systems in the telecommunication industry, and is unknowingly drawn into a maelstrom of sinister manipulation, industrial espionage, love and betrayal. Alex, unwillingly, rises to the highest power in the world by perfecting the same methods he himself was exposed to, while frantically fighting outer and inner enemies.'
    },
  ])

  return (
  <div>

    <Navbar />
    { books.map(book => (
      <Book key={book.id} title={book.title} author={book.author} description={book.description}/>
    ))
    }
    {/*<Book title="Citizen Kane" author="Orson Wells" description="A fascinating man's rise to fame, and his eventual fall from the top of the world." />
    <Book title="1984" author="George Orwell" description="In a totalitarian future society, a man, whose daily work is re-writing history, tries to rebel by falling in love." />
  <Book title="Slaughterhouse 5" author="Kurt Vonnegut" description="Billy Pilgrim has mysteriously become unstuck in time. He goes on an uncontrollable trip back and forth from his birth in New York to life on a distant planet and back again to the horrors of the 1945 fire-bombing of Dresden." />*/}
  </div>
  )
}

export default App;
