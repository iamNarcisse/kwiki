import React from 'react';
import Header from '../header';
import Footer from '../footer';
import { Link } from 'react-router-dom';
const Privacy = (props) => {
    return (
        <div>
            <Header />
            <br />
            <br />
            <div className="container">

            <div className="blended_grid">
                <div className="row1">
                    <span className="span1">Privacy Policy</span>
                    <b />

                    <div style={{ background: '#ff0066', width: '100%', maxWidth: '1170px', height: '2px' }}></div>
                    <br />
                </div>

                <div className="row1" style={{ lineHeight: '22px' }}>
                    <br />
                    Your privacy is important to Kwiki Karts and always has been. So we've developed a Privacy Policy that covers how we collect, use, disclose, transfer, and store your information. Please take a moment to familiarize yourself with our privacy practices and let us know if you have any questions.
                </div>

                <div className="bgbox_grey" style={{ marginTop: '40px', fontSize: '18px', padding: '20px 40px' }}>
                    Overview: <br /><br />
                    <ul style={{ listStyleType: "decimal" }}>
                        <li><a href="#q1" className="ques">How Personal Information about Customers is used?</a></li>
                        <li><a href="#q2" className="ques">What Personal Information about Customers does Kwikikarts Gather?</a></li>
                        <li><a href="#q3" className="ques">What about Cookies?</a></li>
                        <li><a href="#q4" className="ques">What is the accuracy of the Personal data provided to Kwikikarts?</a></li>
                        <li id="q1"><a href="#q5" className="ques">How Secure is Information about Me?</a></li>
                        <li><a href="#q6" className="ques">Examples of Information Collected</a></li>
                        <li><a href="#q7" className="ques">What are your rights?</a></li>
                    </ul>
                </div>

                <div style={{ margin: '30px 0' }}>
                    <div className="question listformat">1. How Personal Information about Customers is used?</div>
                    <p className="txt">
                        User data may be shared with Kwiki Karts providers to improve order processing and customer service. It may also be used both for marketing research purposes and customer relation management.
<br /><br />
                        <b>What is done with your personal information?</b><br />
                        User data collected help us to personalize our website according to each userís wishes and preferences. Offering you the most spontaneous and friendly surfing experience is our priority.
			Data collected are for statistical purposes only and help us to:<br />
                    </p><ul className="lst" id="q2">
                        <li>Process orders</li>
                        <li>Deliver products and services</li>
                        <li>Process payments and communicate with you about your orders, products, services and promotional offers</li>
                        <li>Keep and update our database and your accounts with us</li>
                        <li>Propose a unique and targeted navigation experience</li>
                        <li>Prevent and detect fraud and abuse on our website</li>
                    </ul>
                    <p></p>
                    <p className="txt">By completing an order or signing up, you agree to receive a) emails associated with finalizing your order, which may contain relevant offers from third parties, and b) emails asking you to review Kwikikarts and your purchase and c) promotional emails, SMS and push notifications from Kwikikarts. You may unsubscribe from promotional emails via a link provided in each email. If you would like us to remove your personal information from our database, unsubscribe from emails and/or SMS, please email Customer Service email address by country</p>
                </div>

                <div style={{ margin: '30px 0' }}>
                    <div className="question listformat">2. What about Cookies?</div>
                    <p className="txt">Cookies are unique identifiers that we transfer to your device to enable our systems to recognize your device and to provide features to make your navigation experience unique and targeted. <br /><br />The acceptance of cookies is not a requirement for visiting the Site. However we would like to point out that the use of the 'basket' functionality on the Site and ordering is only possible with the activation of cookies. Cookies are tiny text files which identify your computer to our server as a unique user when you visit certain pages on the Site and they are stored by your Internet browser on your computer's hard drive. Cookies can be used to recognize your Internet Protocol address, saving you time while you are on, or want to enter, the Site. We only use cookies for your convenience in using the Site (for example to remember who you are when you want to amend your shopping cart without having to re-enter your email address) and not for obtaining or using any other information about you (for example targeted advertising). Your browser can be set to not accept cookies, but this would restrict your use of the Site. Please accept our assurance that our use of cookies does not contain any personal or private details and are free from viruses. <br /><br />
                    </p>
                    <p></p>
                </div>

                <div style={{ margin: "30px 0" }}>
                    <div className="question listformat" id="q6">4. How Secure is Information about Me?</div>
                    <p className="txt">It is important for you to protect against unauthorized access to your password and to your computer. Be sure to sign off when finished using a shared computer. Click here for more information on how to sign off.<br />
                        <span>We work to protect the security of your information during transmission by using Secure Sockets Layer (SSL) software, which encrypts information you input.<br />
                            We reveal only the last four digits of your credit card numbers when confirming an order. Of course, we transmit the entire credit card number to the appropriate credit card company during order processing.
			</span>
                    </p>
                </div>
                <div style={{ margin: "30px 0" }}>
                    <div className="question listformat">5. Examples of Information Collected: </div>
                    <ul>
                        <li><b>Information you give us: </b>You provide most such information when you search, buy, post, participate in a contest or questionnaire, or communicate with customer service. For example, you provide information when you search for a product; place an order through Kwikikarts or one of our third-party sellers; provide information in Your Account (and you might have more than one if you have used more than one e-mail address when shopping with us) or Your Profile; communicate with us by phone, e-mail, or otherwise; complete a questionnaire or a contest entry form. As a result of those actions, you might supply us with such information as your name, address, and phone numbers; credit card information; people to whom purchases have been shipped, including addresses and phone number;  e-mail addresses of your friends and other people; content of reviews and e-mails to us; personal description and photograph in Your Profile ; and financial information, including Social Security and driver's license numbers.</li><br />
                        <li><b>Automatic information:</b> Examples of the information we collect and analyze include the Internet protocol (IP) address used to connect your computer to the Internet; login; e-mail address; password; computer and connection information such as browser type, version, and time zone setting, browser plug-in types and versions, operating system, and platform; purchase history, which we sometimes aggregate with similar information from other customers to create features like Top Sellers ; the full Uniform Resource Locator (URL) clickstream to, though, and from our Web site, including date and time; cookie number; products you viewed or searched for; and the phone number you used to call our 800 number. We may also use browser data such as cookies, Flash cookies (also known as Flash Local Shared Objects), or similar data on certain parts of our Web site for fraud prevention and other purposes. During some visits we may use software tools such as JavaScript to measure and collect session information, including page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), and methods used to browse away from the page. We may also collect technical information to help us identify your device for fraud prevention and diagnostic purposes.</li><br />
                        <li id="q7"><b>Mobile: </b>Most mobile devices provide users with the ability to disable location services. Most likely, these controls are located in the device's settings menu.If you have questions about how to disable your device's location services, we recommend you contact your mobile service carrier or your device manufacturer.</li><br />
                        <li><b>Information from other sources: </b>Examples of information we receive from other sources include updated delivery and address information from our carriers or other third parties, which we use to correct our records and deliver your next purchase or communication more easily; account information, purchase or redemption information, and page-view information from some merchants with which we operate co-branded businesses or for which we provide technical, fulfillment, advertising, or other services; search term and search result information from some searches conducted through the Web search features.</li>
                    </ul>
                </div>
                <div style={{ margin: "10px 0 0 0" }}>
                    <div className="question listformat">6. What are your rights?</div>
                    <p className="txt">If you are concerned about your data you have the right to request access to the personal data which we may hold or process about you. You have the right to require us to correct any inaccuracies in your data free of charge. At any stage you also have the right to ask us to stop using your personal data for direct marketing purposes.</p><br />
                </div>


                <div className="about-row">
                    <center>
                        <p className="clor">Ready to start Shopping?</p>
                        <br />
                        <Link to="/" className="btnn">Shop Now</Link>
                    </center>

                </div>


            </div>
            
            </div>
            <br />
            <br/>

            <Footer />
        </div>

    )
}
export default Privacy;