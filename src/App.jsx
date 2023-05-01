import { useEffect, useState } from "react"
import { Card } from "./components/Card"
import * as mqtt from "mqtt"

function App() {
  const [mqttData, setMqttData] = useState([null, null, null, null, null, null, null, null, null, null, null, null])

  useEffect(() => {
    const client = mqtt.connect("ws://127.0.0.1:1884")
    client.on('connect', function() {
      console.log("connected")
      client.subscribe('realtime/tc-liq', function(err) {
        if(err)
          console.log("Hubo un error al subscribirse al topic")
      })  
    })

    client.on('message', function(topic, message) {
      let data = JSON.parse(message.toString())
      setMqttData(data.data)
    })
  }, [])

  return (
    <div className='bg-[url("./assets/background.svg")] bg-cover bg-no-repeat h-screen p-5'>
      <div className="h-full w-full bg-white shadow-xl rounded-lg text-black p-6">
        <div className="flex justify-between">
          <div className="text-[2em] font-bold">Complejo Lambda</div>
          <div className="">
            <img className="w-16 h-16" src="/src/assets/half-life.png" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-4 gap-x-16 gap-y-10"> 
          <Card title="TC-LIQ" value={mqttData[0]} />
          <Card title="TC" value={mqttData[1]} />
          <Card title="TC-GI" value={mqttData[2]} />
          <Card title="LAC" value={mqttData[3]} />

          <Card title="QMM" value={mqttData[4]} />
          <Card title="Vibration" value={mqttData[5]} />
          <Card title="Corrosion" value={mqttData[6]} />
          <Card title="Future Expansion" value={mqttData[7]} />

          <Card title="Hydropulse" value={mqttData[8]} />
          <Card title="Vibration-TC" value={mqttData[9]} />
          <Card title="Exproof" value={mqttData[10]} />
          <Card title="Vibration-GI" value={mqttData[11]} />
        </div>
      </div>
    </div>
  )
}

export default App
