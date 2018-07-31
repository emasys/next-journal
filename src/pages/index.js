import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h6>Be scared!</h6>
    <p>
      Hi people from planet earth, if you're surfing through this page from
      Mars, congratulations you made it, but we don't miss you. So back to my
      people, this is a perfect site to pour out your opinions about things,
      people and whatever. You identity will forever remain anonymous, so fear
      not. However, this site will be purged per year, until then - nothing can
      be deleted or edited. Be scared...
    </p>
    <p>So, what are you waiting for? </p>
    <form action="">
      <div className="title">
        <input
          type="text"
          className="text-input"
          placeholder="title of your adventure "
        />
      </div>
      <div className="title">
        <textarea
          name="story"
          id=""
          className="text-input"
          cols="30"
          rows="10"
          placeholder="thrill us with an awesome story"
        />
      </div>
    </form>
  </div>
)

export default IndexPage
