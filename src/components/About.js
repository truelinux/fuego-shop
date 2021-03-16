import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="ABOUT" title="fuego" />
            <div className="row">
              <div className="p-5 m-auto col-10 ">
                <div className="text-center">
                  <strong>WHY</strong>
                </div>
                <div className="text-justify">
                  <p>
                    So it all started in a highschool math class with a couple
                    friends. The minds coming together to think of something
                    that would soon become an entire brand. I was extremeley
                    interested at the fact that we all enjoyed up with the name
                    'Fuego' and immediately started brainstorming ideas for what
                    is possible. Ofcourse being myself i saw more than just
                    ideas, I saw a future. It wasnt until around senior year i
                    realized this future was downing on me. As the idea grew on
                    more and more, I had decided that I want this 'brand' to not
                    only be a busniess but a family aswell.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="p-5 m-auto col-10 ">
                <div className="text-center">
                  <strong>HOW</strong>
                </div>
                <div className="text-justify">
                  <p>
                    Using money out of my pocket, I bought most of the basic
                    tools I needed to start designing. The logo was easiest part
                    considering how minimal it is, which is perfect. I wanted
                    the face of the brand to be something suttle but powerful at
                    the same. So I drew out what I liked in Illustrator and
                    stuck with the first draft ever since. The only changes so
                    far are the thickness of the black stroke but that will vary
                    in different designs. The best thing about keeping a minimal
                    design is that it allows me to do a lot more with it. Once I
                    was finished polishing all the technical things with design
                    and digitizing etc. , I started my journey of trial and
                    error. Embroidery can be very confusing at times especially
                    with unique designs like mine so it took a many trials to
                    achieve the results I wanted on a cotton tee. But after
                    enough practice and determination, its easier than ever. 90%
                    of the designs you will see from me will all be engineered
                    and digitized myself.
                  </p>
                </div>
                <Link to="/" className="text-center">
                  <div className="text-click">STORE</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
