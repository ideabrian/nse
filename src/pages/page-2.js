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
    <h4>Favorites</h4>
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
    <h4>Least Favorite</h4>
    <ul>
      <li>Respond to Netlify customers on Twitter</li>
      <li>
        Work with prospective customers to explain our service and the pricing
        model
      </li>
      <li>
        Work with people to figure out if Netlify's service can solve a
        particular workflow or integration challenge they have
      </li>
      <li>
        Engage multiple users at once via chat to answer their questions and
        troubleshoot problems
      </li>
      <li>
        Create video tutorials to help teach users a specific feature or use
        case
      </li>
    </ul>
    <p>
      <strong>Thinkig:</strong>
      There weren't any on the list that seemed unfavorable or interesting. I
      have done and would do them all if helpful to the mission. The five above
      are my least favorite because:
      <ul>
        <li>
          Twitter should redirect people to other channels - doesn't require an
          engineer.
        </li>
        <li>
          Working with prospective customers maybe fall more into
          sales-engineering
        </li>
        <li>
          Solving workflow also could be done by a trained sales-team member
        </li>
        <li>Webinar -- seems to fall into marketing</li>
        <li>
          Video tutorials also - marketing - but based on conversations with
          customer-facing roles.
        </li>
      </ul>
    </p>
    <h4>Providing Technical Support</h4>
    <p className="question">
      Q. What is your favorite thing about providing technical support?
    </p>
    <p className="answer">
      A. Providing support is a genuinely human activity. The technical side is
      just an implementation detail of sharing something I know that the other
      person does not. I love it when the light bulb goes and they have learned
      something that makes their life better.
    </p>
    <h4>Netlify</h4>
    <p className="question">
      Q. What did you think of our service during the time you used it?
    </p>
    <p className="answer">
      I have put up many sites on Netlify. I could still use more 'smarts'. A
      little checkbox asking me what kind of tools I'm using would go along way
      in suggesting my deploy settings.
    </p>
    <h4>Tech Selection</h4>
    <p className="question">
      Q. How did you make the site and why did you choose the tools you did?
    </p>
    <p className="answer">
      A. I have a consulting client who's setting up a new Gatsby / Sanity blog
      and so I need more practice with Gatsby. Of course, being a generalist, I
      only ever feel like I'm practicing the use of my tools, and I always
      welcome learning something new.
    </p>
    <p>
      <strong>Gotcha:</strong> Last night, I was putting up an app made with
      create-react app - where the build folder is 'build' -- now, I'm using
      Gastby, where it's 'public' -- I entered the wrong details at first. It
      took a few minutes to troubleshoot. I dragged the 'public' folder onto the
      upload box on netlify to manually deploy -- and realized I wasn't dragging
      the 'build' folder.
    </p>
    <p>
      <strong>Gotcha #2:</strong> When using the netlify init on the CLI - it
      asks if you want to create a netlify.toml file. However, the defaults
      weren't set to Gatsby - so those were over-riding the settings I
      configured in the web UI. Fixed. Now deploying / building properly via
      github webhooks.
    </p>
    <h4>Good Docs</h4>
    <p className="question">
      Provide a link to a tech/developer doc set you think are well done{" "}
    </p>
    <p className="answer">
      A. <a href="https://www.sanity.io/docs/">Sanity Docs are Good</a>
    </p>
    <p>
      <strong>Why?</strong> The Sanity Docs are enjoyable because they have a
      bias toward action rather than information. They're not heavily linked to
      outside resources that distract you from getting something done.
    </p>
    <h4>SSL/HTTPS</h4>
    <p className="question">Q. Why do you think SSL/HTTPS is important?</p>
    <p className="answer">
      SSL and HTTPS provide encryption for the transmission of data. It's
      especially important these days when so much work is being done by the
      client / browser using JavaScript. Without SSL, it's be much easier to
      implement some man-in-the-middle attacks and siphon off sensitive
      information.
    </p>
    <h4>DNS Configuration</h4>
    <p className="question">
      What you think 2 major challenges around DNS configuration are for
      less-technical end-users?
    </p>
    <p className="answer">
      Humans learn anything, hard or easy, by doing the activity and getting
      feedback that tells them if they did it right or wrong. As regard to DNS:
      <ul>
        <ol>
          <li>
            We don't get enough practice configuring DNS. The tools are
            technical and don't give easy feedback as to the outcome DNS
            modifications will provide. Because of this, it's more of an
            expertise than an off-the-shelf skill. Especially when it comes to
            optimization.
          </li>
          <li>
            Because DNS configurations could be optimized using multiple IP
            address and cached content - making sure you configure the DNS based
            on regional demands makes sense. This level of configuration doesn't
            seem readily available to the average user.
          </li>
        </ol>
      </ul>
    </p>
    <h4>Site Won't Build</h4>
    <p className="question">
      A customer writes in saying their "site won't build":
    </p>
    <p className="answer">
      Dear customer, I'm glad you're reaching out, we'll definitely help you get
      your site building. Thanks for your patience in the process. A little
      overview: The 'build' process is one of getting lots of
      [code]puzzle-pieces fitting together. Think of a puzzle with small pieces.
      Before you deploy to Netlify, you should ensure your site is working on
      your local machine. If it's working locally, you can upload the folder to
      Netlify by dragging the build folder into the deploy area. If the CI and
      Netlify build is failing, there are more considerations, including
      ensuring your tools are up to date.
    </p>
    <p>
      To get the build working on netlify, we may want to break the code up into
      chunks to divide and conquer. Let's get something small working. Then,
      we'll add chunks until we find the break. Go back to a time when something
      was working and we'll troubleshoot from there. A list of the tools you're
      using including plugins, site generators, etc. will be helpful. They'll
      help us think about what can be breaking. If you go back through and can
      get it working, we're good. If not, we can troubleshoot your logs and
      point you to some resources that'll help your specific case. We're glad we
      can work together to make your Netlify experience as enjoyable as
      possible.
    </p>
    <h4>BONUS #1</h4>
    <p>
      Redirect: <a href="/netlify/anything/">/netlify/anything</a>
    </p>
    <h4>BONUS #2</h4>
    <p>
      <Link to="/suggestions/">Suggestions</Link>
    </p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
