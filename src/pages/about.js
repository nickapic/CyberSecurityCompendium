import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="ABCofIR">
        <SEO title="About Page for the website ABCofIR" />
        <h1 className="main-heading">About Us</h1>
        <p className="about-paragraph">
          {" "}
          This blog was based on the idea that International Relations are
          essential, compelling and accessible.
          <br />
          <br />
          International Relations are essential because they can affect our
          daily life, and will certainly affect our future.
          <br />
          <br />
          They are compelling because in the past years many outlets have
          discovered a widespread interest on international news, conflicts, and
          realities across the globe shown by their searches online. Therefore,
          the public is interested.
          <br />
          <br />
          However, are they accessible? In our opinion, not quite yet, therefore
          we would like to contribute with this project, which we have named The
          ABC of IR (International Relations). This concept is not new, it is
          not difficult to comprehend, and it helps people understand our
          globalized world and what governs it.
          <br />
          <br />
          This is our why, the attempt to increase the accessibility and
          approachability towards information on politics, and the international
          scene.
          <br />
          <br /> Our what concerns helping in the development of a more informed
          society, making international relations more manageable for anyone
          interested in the topic (be it for a future degree or career, or just
          for natural curiosity and trying to keep up with international
          politics).
          <br />
          <br />
          Our how is focused on writing because the written word online is one
          of the most used methods to acquire information and learn, therefore
          the best way to communicate.
          <br />
          <br />
           The subject matters that will be discussed in this blog
          encompass a substantial variety of areas, from current international
          politics, to international organizations and their work, just to give
          some examples.
        </p>
      </Layout>
    )
  }
}

export default About
