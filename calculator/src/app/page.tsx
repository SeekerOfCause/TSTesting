import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        top
      </div>

      <div className="calcDiv">
        <div className="gridContainer">
          <div className="item1">1</div>
          <div className="item2">2</div>
          <div className="item3">3</div>
          <div className="item4">4</div>
          <div className="item5">5</div>
          <div className="item6">6</div>
          <div className="item7">7</div>
          <div className="item8">8</div>
          <div className="item9">9</div>
          
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
       bottom
      </div>
    </main>
  )
}
