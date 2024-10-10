import Buttons from './Buttons'
import CommentsChart from './Charts/CommentsChart'
import FollowersChart from './Charts/FollowersChart'
import ImpressionChart from './Charts/ImpressionChart'
import LikesChart from './Charts/LikesChart'
import PostChart from './Charts/PostChart'
import KeyPerformance from './KeyPerformance'
import './SocialMedia.css'

const MainSocialMedia = () => {
  return (
    <div className="socialmediaMain flex justify-between  pt-28 ">
      <div className="bg-white pl-3 pr-10 pt-5">
        <div
        style={{ width: "150px", cursor: "pointer" }}
          className="flex items-center mb-5 gap-3 font-bold"
         >
          <img src="./genera.png" alt=""/>
        </div>
        <div style={{ width: "150px", cursor: "pointer" }}
          className="flex items-center mb-5 gap-3 font-bold">
          <img src="./cohort.png" alt=""/>
        </div>
      </div>
      <div className="bg-white py-10 mb-10 rounded-2xl mt-10 mx-auto">
        <Buttons />
        <KeyPerformance />
        <div className="flex justify-around my-5">
          <FollowersChart />
          <PostChart />
          <ImpressionChart />
        </div>
        <div className="flex justify-center gap-20">
          <LikesChart/>
          <CommentsChart/>
        </div>
      </div>
      {/* <UserStatics  setEngagement={setEngagement} setFollowers={setFollowers} setImpression={setImpression}/> */}
    </div>
  )
}

export default MainSocialMedia
