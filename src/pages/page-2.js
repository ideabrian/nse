import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Questions" />
    <h1>NSE Questions</h1>
    <p>Some fun questions to answer:</p>

    <h3>What are you 5 Favorite and Least Favorite Things to Do</h3>
    <p>
      From:{" "}
      <a href="https://gist.githubusercontent.com/fool/b0f254ff8c72a5765b6a9138249789d6/raw/250cf760aebb34f6ea32f86fd5361abb706fed9a/gistfile1.md">
        List of Tasks
      </a>
    </p>
    <h3>Favorites</h3>
    <ul>
      <li>
        <strong>Customer:</strong> Respond to 50+ support requests via email or
        chat most days
      </li>

      <li>
        <strong>Team:</strong> Suggest and champion improvements to the Support
        team's workflow to your colleagues in and out of Support
      </li>

      <li>
        <strong>Product:</strong> Spot trends across many cases to improve
        Netlify's product and service
      </li>
      <li>
        <strong>Learning:</strong> Receive occasional phone calls requesting
        support from our highest-value customers
      </li>
      <li>
        <strong>Revenue:</strong> Work with people to figure out if Netlify's
        service can solve a particular workflow or integration challenge they
        have
      </li>
    </ul>
    <p>
      <strong>Thinking:</strong> Without a customer, there's no business.
      Without a team, there's no company, without improvements, we'll get eaten
      by competition, without learning, we won't know what to create, and
      without revenue, we'd be better off finding other work.
    </p>
    <h3>Least Favorite</h3>
    <p>
      There weren't any on the list that seemed unfavorable or interesting. I
      have done and would do them all if required. The above list, however,
      represent a prioritized list based on how I value the work involved.
    </p>

    <h3>Providing Technical Support</h3>
    <p class="question">
      Q. What is your favorite thing about providing technical support?
    </p>
    <p class="answer">
      A. Providing support is a genuinely human activity. The technical side is
      just an implementation detail of sharing something I know that the other
      person does not. I love it when the light bulb goes and they have learned
      something that makes their life better.
    </p>
    <p class="question">
      Q. What did you think of our service during the time you used it?
    </p>
    <p class="answer">
      I have put up many sites on Netlify. I could still use more 'smarts'. A
      little checkbox asking me what kind of tools I'm using would go along way
      in suggesting my deploy settings.
    </p>
    <p class="question">
      Q. How did you make the site and why did you choose the tools you did?
    </p>
    <p class="answer">
      I have a consulting client who's setting up a new Gatsby / Sanity blog and
      so I need more practice with Gatsby. Of course, being a generalist, I only
      ever feel like I'm practicing the use of my tools, and I always welcome
      learning something new.
      <br></br>
      Gotch: Last night, I was putting up an app made with create-react app -
      where the build folder is 'build' -- now, I'm using Gastby, where it's
      'public' -- I entered the wrong details at first. It took a few minutes to
      troubleshoot.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
