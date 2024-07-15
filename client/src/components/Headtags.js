import { Helmet } from "react-helmet";

const Headtags = () => (
  <>
    {/*This is the head of the document we see in html */}
    <Helmet>
      {/* <link rel="icon" href="/favicon.png" sizes="16*16" type="image/png" /> */}

      {/* <link rel="stylesheet" type="text/css" href="/listMessages.css" />


      {/*The CSS files are in the public folder 
         With Next.js, we can create a public folder in the root and then save some files there and refer to them by '/<filename>'*/}
      <title>Dai3tna</title>
    </Helmet>
  </>
);
export default Headtags;
