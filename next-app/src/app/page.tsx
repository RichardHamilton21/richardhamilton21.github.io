import Image from "next/image";
import ProfilePic from "./assets/profile-pic.jpg";
import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <>
      <h1>Patty Hamilton for 12th District State Representative</h1>
      <div className={styles.profilePicContainer}>
        <Image src={ProfilePic} alt="" />
      </div>
      <div className={styles.donateContainer}>
        <a
          href="https://politics.raisethemoney.com/en/phamilton"
          target="_blank"
        >
          DONATE
        </a>
      </div>

      <h2>Who I am</h2>
      <p>
        I am Patty Hamilton, and I am a Republican running in upcoming
        Republican Primary which will take place on March 19, 2024, to become
        the State Representative for the 12th District, and to serve in the Ohio
        House of Representatives. My district covers all of Madison County,
        Pickaway County, and lower Franklin County.
      </p>
      <p>
        I am currently a landlord of 10 high quality rental houses of which my
        husband and I, along with our 3 sons, have renovated.
      </p>
      <p>
        I am member of the Pickaway County Republican Central Committee, for the
        past two years, and am the secretary. I am a member of the America First
        Now (AFN) group, Ohio Farm Bureau member, and the Pickaway County
        Agricultural Society. I am a 4 year member of the Soldier’s Monumental
        Association (SMA) and am currently serving as the Treasurer and
        Corresponding Secretary. I am very knowledgeable on various guns, have
        my Concealed Carry Weapon (CCW) permit, and am an NRA member. I am a
        lifetime member of the Veterans of Foreign Wars (VFW) and a member of
        the Pickaway County Sportsman Club.
      </p>
      <h2>Biographical Summary</h2>
      <h3>
        I served for 30 years in the Army Reserves as a Military Police Officer
      </h3>
      <p>
        I am a retired Lieutenant Colonel with Combat tours of duty in both Iraq
        and Afghanistan. In Iraq during the Operation Iraqi Freedom (OIF), as
        the Theater Detainee Reporting Center Chief. In Afghanistan during
        Operation Enduring Freedom (OEF), as the Provost Marshal for Kandahar
        Airfield and Customs Clearance AOfficer in Charge of all of Afghanistan.
        I worked one year at the Pentagon, as the National Detainee Reporting
        Center Operations Officer. My last assignment was two years as the
        Battalion Commander of a Military Police Training Battalion. While in
        the Army, I earned the Legion of Merit Medal, Bronze Star Medal, Defense
        Meritorious Service Medal, Meritorious Service Medal and many other
        awards and decorations.
      </p>
      <h3>My Military Training Consists of </h3>
      <p>
        Basic Combat Training, Military Police School, Officers Basic Course,
        Airlift Planners Course, Air Movement Course, Hazardous Materials,
        Adjutant General School, Officers Advanced Course, Mobilization Planners
        Course, Hand-to-hand Combat Training, Drug Demand Reduction Course,
        Commander’s Course, Army Master Fitness Course, Combined Arms and
        Services Staff School (CAS3), Command and General Staff College (CGSS) /
        Intermediate Level Education (ILE).
      </p>
      <h3>
        I had many different civilian jobs because my husband was an Active duty
        Command Sergeant Major{" "}
      </h3>
      <p>
        for over 29 years. Therefore, I changed civilian jobs every time we
        moved from state to state and to different countries. Some of my work
        experience includes: being a Community Based Outpatient Clinic (CBOC)
        Manager at the Department of Veterans Affairs in Lancaster and as the
        Transition Patient Advocate for OIF/OEF Veterans at the Chillicothe VA
        Hospital, a school teacher in NC, SC, GA, a tax preparer, a nursing home
        certified medical technician, a Law Office legal assistant, a Police
        Officer in the Marshall Islands, an exchange detective for Army Air
        Force Exchange Service (AFFES), an Inventory Management Auditor, a
        Raytheon accounting collections Manager.
      </p>
      <h3>My civilian education consists of </h3>
      <p>
        a Master’s of Science Degree in Education from Walden University, MN; a
        Bachelor of Science degree from Central Missouri State University, in
        Criminal Justice; a Teaching Certificate from Armstrong Atlantic State
        University, GA.
      </p>
      <h2>What I stand for and why I am running:</h2>
      <ul>
        <li>Always maintain the highest level of integrity </li>
        <li>Duty to uphold our constitutional freedoms</li>
        <li>
          Ensure Parent’s Rights to Protect their Children and Defend Biological
          Girls in High School Sports
        </li>
        <li>
          Stand for Rights of Farmers and Small Businesses while keeping
          efficient, honest government
        </li>
        <li>Lower Taxes and ensure Ohio is energy Independent</li>
      </ul>
      <p>
        I am running because I believe the people of District 12 need a person
        who will listen and uphold their values along with being present in the
        counties represented in the district. Ohioans deserve to be informed by
        their representative on a regular basis of the legislation and share
        their thoughts on the important legislation for their communities.
      </p>
    </>
  );
}
