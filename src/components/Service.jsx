import top from "../images/top64.png"; 


function Service() {
    return (
        <> 
            <h1 style={{ color: "white" }}>SERVICES</h1>
            <div className='borderline'></div>
            <div className="service">
                <div className="service-text">
                    <h4>Buy a website</h4>
                    <br/>
                    <p>
                    When buying a new website, there are multiple things to consider and it can be difficult and frustrating. 
                    What type of website do I need for my business, and how much money do I want to spend? 
                    Maybe you want a simpler solution to show and express yourself 
                    online? Maybe you have many followers on different SoMe channels, but also want to create a 
                    profile with a website solution?
                    </p>
                    <br/>
                    <p> There are many good solutions that can do the job for you. 
                        Like setting up your own website with Wordpress, WIX or Webnode ect. 
                        That doesn’t necessary make you a digital designer, who knows the tricks of 
                        creating an attracting and visual impressive website. </p>
                        <br/>
                        <p>
                        Here on bellingmowedesign you will get a solid, modern website adapted to your 
                        needs for a good price without the hustle, nor have to spend a lot of money on the bigger agencies.
                        </p>
                    <br/>
                </div>
                <div className="service-text">
                    <h4>How to buy a website from bellingmowebdesign?</h4>
                    <br/>
                    <p>Send in a non-binding request to postbellingmo@gmail.com.</p>
                    <br/>
                    <p>
                    Write a little bit about yourself and/or your business. 
                    Explain what type of website you are looking for and what type of functionalities you wish to have on your site.
                    </p>
                <br/>
                <p>
                After the request and a deal is made on what type of website you want, we will then be 
                adding the images, content and material for your website. 
                Your request will be answered within 1-3 working days. 
                </p>
                <br/>
                <p>Any questions or other requires are all ofcourse welcomed!</p>
                </div>
                <div className="service-text">
                    <h4>Types of webdesign for sale:</h4>
                    <br/>
                    <li><p>New website (no genre)</p></li>
                    <li><p> Business </p></li>
                    <li><p> Portfolio </p></li>
                    <li><p> Blog </p></li>
                    <li><p>Digital Resume</p></li>
                    <br/>
                    <p>
                    All websites are responsive and developed to adapt all digital screens like computers (pc), tablets and mobile (android/apple). 
                    All webpages are coded with javascript library React and I use Sanity.ios as headless CMS (API). 
                    You will get your own url to your Studio Dashboard to post «add/delete» material into your website.
                    </p>
                    <br/>
                    <p>
                    All websites follows the guidelines for WCAG. 
                    The webdesigns contains metatags for search engines like Google.
                    </p>
                </div>
            </div>
                <div className="service">
                <div className="service-text">
                    <h4>Blog & Portfolio</h4>
                    <br/>
                    <p>
                    The Blog and Portfolio websites are coded and integrated backend with Sanity.ios, that are a headless CMS. 
                    With a blog or portfolio web-solution you can post/edit/delete e.g articles on a blog or images in a portfolio 
                    from your own Studio Dashboard. The upsides with a headless CMS like Sanity is that you can post and store your 
                    content on a server, without have to delete your content if you want to delete or change your whole webpage. 
                    The frontend is kept separate and can be updated or changed whenever you want without risking your content.
                    </p>
                   </div>
                   <div className="service-text">
                    <h4>Business website</h4>
                    <br/>
                    <p>
                    A business webpage are best suited those who have their own business and want to promote 
                    and market their enterprise online. With a business website you may have multiple 
                    functions that suits your business, and a lot more landing pages. 
                    <p/>
                    <br/>
                    Content is key and a «brand identity» is crucial for your users to get credibility for 
                    your business so they know the service you provide are quality. This gives your customers 
                    trust and want to return to you.
                    Not to mention, also to create good revenue for your business! 
                     </p>
                </div>
                   <div className="service-text">
                    <h4>New website</h4>
                    <br/>
                    <p>
                    Either a blog, portfolio, business or something other in mind, lets create together! 
                    Send a non-binding request today and lets talk about what you want and need for your website. 
                    The designer process starts when we have an agreement.
                    You will be a part of the process and give feedback along the way, and when the prototype is ready the coding starts. 
                    The designer-process and devlopment may vary on how big the project is! 
                    </p>
                    <br/>
                    <p>More info and will be provided when you send a request, as all requests are different, 
                    and no website is alike. </p>
                    <br/>
                </div>
            </div>
            <div className="container-animation">
                <div className="select-button">
                    <a href="#id_top">TOP
                        <img src={top} alt="arrow" style={{width: "32px", margin: "2px"}}></img></a>
                </div>
            </div>
            <br />
            <br />
            <br />
        </>
    )
}

export default Service; 