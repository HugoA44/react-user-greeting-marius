interface GreetingProps {
  name?: string;
}

export default function UserGreeting ({ name }: GreetingProps) {
  const hours = new Date().getHours()
  let greeting = ''

  if (hours < 12) {
    greeting = 'Bonjour'
  } else if (hours < 18) {
    greeting = 'Bonne après-midi'
  } else if (hours < 23) {
    greeting = 'Bonsoir'
  } else {
    greeting = 'Bonne nuit'
  }

  return (
    <div className='App'>
      {greeting}, {name}
    </div>
  )
}
