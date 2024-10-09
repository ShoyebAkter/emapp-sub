import './Business.css'
import TopChart from './TopChart/TopChart'

const Business = () => {
  return (
    <div className='flex justify-between overviewMain'>
      <div
        style={{ backgroundColor: "white",}}
        className="pl-3 pr-4 pt-10"
      >
        <div
          style={{  width: "150px", cursor: "pointer" }}
          className="flex gap-3 items-center mb-5 font-bold"
        >
         <img src="./sales.png" alt=""/>
         </div>
        <div
          style={{  width: "150px", cursor: "pointer" }}
          className="flex items-center mb-5 gap-3 font-bold"
        >
          <img src="./sitedata.png" alt=""/>
        </div>
        <div
          style={{  width: "150px", cursor: "pointer" }}
          className="flex items-center mb-5 gap-3 font-bold"
        >
          <img src="./cartanalysis.png" alt=""/>
        </div>
      </div>
      <div className="mx-auto mt-20">
        <TopChart/>
      </div>
    </div>
  )
}

export default Business
