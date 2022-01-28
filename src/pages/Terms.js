/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import "../sass/Terms.scss";
import { Grid, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Geocode from "react-geocode";
import { useForm } from "react-hook-form";
import RegisterImg from "../assets/images/register-img.png";
import { geolocated } from "react-geolocated";
import { API } from "../api/API";
import ContentHeader from "../components/layout/ContentHeader";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoadingButton } from "@mui/lab";
import { useLocation, useParams } from "react-router";

const Terms = () => {
return (
    <>
      <ContentHeader customClass="InnerHead" />
      <Grid container id="main">
        {/* Banner Section */}
        <div className="Banner_Inner">
          <div className="container">
            <h1 className="Banner_Inner_Title">Terms and Conditions Agreement</h1>
          </div>
        </div>

        {/* Form Section */}
        <div className="Form">
          <div className="container">
            <Grid container spacing={3} alignItems="center">
              <Grid item sm={12} className="box">
                <h2 className="Form_Title">Terms and Conditions Agreement</h2>

                <div className="row">
                    <div className="form-group col-12">
                        <p>Effective: January 01, 2021</p>
                        <p>Please read the terms and conditions carefully. The terms and conditions a legal agreement between you and Ragibull LLC.</p>
                         
                    </div>
                </div>
               
              </Grid>
              
            </Grid>

          </div>
        </div>

        <div className="container">
            <Grid container spacing={3} alignItems="left">
                <Grid item sm={12} className="box">
                    <p><b>1. Acceptance of this Agreement</b></p>
                    <p>Ragibull provides an online marketplace connection, using web-based technology that connects you and other consumers, restaurants and/or other businesses and independent delivery contractors (“Contractors”).  Ragibull’s software permits consumers to place orders for food and/or other goods from various restaurants and businesses, either for delivery or pickup (the “Software”). Once a delivery order is made, the Software notifies Contractors that a delivery opportunity is available and the Software facilitates completion of the delivery to the consumer. Once a pickup order is made, the Software communicates with the customer regarding the availability of the order for pickup. Ragibull is not a restaurant, delivery service, or food preparation business.</p>
                    <p><b>2. The Service</b></p>
                    <p>The Ragibull app developed by Ragibull, LLC, facilitates you to find Restaurants and the food items made available by them, and order food of your choice from your preferred Restaurant to be delivered at your place, and pay for the same online.</p>
                    <p><b>3. Modification</b></p>
                    <p>Ragibull reserves the right to modify or discontinue all or part of the Service, temporarily or permanently, with or without notice to User, and is not obligated to support or update the Service. The amended Terms and Conditions of this agreement shall be effective immediately after they are initially posted on the Site. User’s continued use of the Service after posting of the amended Terms on the Site constitutes User’s affirmative: (a) acknowledgement of the Terms and its modifications; and (b) agreement to abide and be bound by the Terms, as amended. User acknowledges and agrees that Ragibull, LLC, shall not be liable to User or any third party in the event that Ragibull, LLC, exercises its right to modify or discontinue all or part of the Service. You can view the most recent version of these Terms at any time here.</p>
                    <p><b>4. Registration</b></p>
                    <p>In order to access/use the services of Ragibull, you can create an account by downloading Ragibull app from the apple or android app store and registering from within Ragibull. You must submit valid identity proof, a valid email address; select e-mail username and password during the registration process. By electing to use these services, you agree to provide true, accurate, current, and complete information about yourself as prompted by registration form for the app (such information being the “Registration Data”), and you agree to maintain and promptly update the Registration Data to keep it true, accurate, current, and complete. If you provide any information that is untrue, inaccurate, not current, or incomplete, or we have any reasonable grounds to suspect that such information is untrue, inaccurate, not current, or incomplete, we may suspend or terminate your account and refuse to offer you any and all current or future use of Ragibull Services.</p>
                    <p>You agree to notify Ragibull immediately if you suspect any unauthorized use of your account. You are solely responsible for any and all use of your account by any third party.</p>
                    <p><b>5. Privacy Policy</b></p>
                    <p>We respect your privacy and the use and protection of your Personal Information. Ragibull collects certain personal information at the time of registration. Such information and data collected by us about Users will be treated as confidential and protected and used by us in accordance with our privacy policy. You can review the most current version of our Privacy Policy at any time at: <a href="https://ragibull.com/privacy" title="privacy">https://ragibull.com/privacy</a>.</p>
                    <p><b>6.	User Conduct/Lawful Use</b></p>
                    <p>User agrees that use of Ragibull is subject to all applicable International, National, Federal, state, and local laws and regulations. User agrees to abide by these laws and is solely responsible for the content of its communications through the Service. User agrees to use Ragibull for lawful purposes only.</p>
                    <p>If you are found to be involved in any of the acts of using Ragibull/Site/Service unlawfully, furnishing incorrect or inappropriate information, you will be advised to stop inappropriate use or furnish correct information, immediately. Failure to immediately do the needful will result in a cancellation of your account and forfeiture of any fees paid. </p>
                    <p>If you encounter any prohibited material on the Site you waive your right to any damages related to such exposure. Such material should be immediately reported to contact@ragibull.com.</p>
                    <p>In case of any violation of these Terms, Ragibull LLC, reserves the right to seek all remedies available by law and in equity for such violations.</p>
                    <p><b>7.	License</b></p>
                    <p>The Materials on this Site/Ragibull app, are copyrighted and any unauthorized use of any such copyrighted Materials may violate copyright, trademark, and other laws. This is a license, not a transfer of title, and is subject to the following restrictions: you may not:</p>
                    <p>Modify, decompile, reverse engineer, or disassemble software Materials except and only to the extent permitted by applicable law;</p>
                    <p>Remove any copyright or other proprietary notices from the Materials;</p>
                    <p>You agree to prevent any unauthorized copying of the Materials.</p>
                    <p><b>8.	Disclaimer</b></p>
                    <p>Services “AS IS”<br />
                    TO THE FULLEST EXTENT PERMITTED BY LAW, RAGIBULL, LLC, AND ITS AFFILIATES, RESTAURANTS AND DELIVERY PARTNERS MAKE NO WARRANTIES, EITHER EXPRESS OR IMPLIED, ABOUT RAGIBULL AND THE SERVICES. THE SERVICES ARE PROVIDED “AS IS”. WE ALSO DISCLAIM ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. RAGIBULL, LLC, IS NOT LIABLE FOR ANY STATEMENTS, REPRESENTATIONS OR CONTENT PROVIDED BY ITS USERS/SERVICE PROVIDERS IN ANY PUBLIC FORUM, HOME PAGE OR OTHER INTERACTIVE AREA, EVEN IF RAGIBULL, LLC, HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                    <p>Ragibull, LLC, does not warrant, endorse, agree, guarantee, or assume responsibility for any beliefs, values, ideas, product or service advertised or offered by businesses, individuals, registered with us.</p>
                    <p>Ragibull, LLC, further does not warrant that its service will be secure or uninterrupted; any information, or other items contained within the Materials on the Site will be accurate and complete. Ragibull, LLC, may make changes to these Materials at any time. Ragibull, LLC, makes no commitment to update the Materials. No oral advice or written information given by Ragibull, LLC, its employees, licensors or the like will create a warranty; nor may you rely on any such information or advice.</p>
                    <p><b>9.	Limitation of Liability</b></p>
                    <p>As a condition of use of Ragibull, and in consideration of the services provided by Ragibull, LLC, User agrees that neither Ragibull, LLC, nor any officer, affiliate, director, shareholder, agent, contractor or employee of Ragibull, LLC, will be liable to User or any third party for any direct, indirect, incidental, special, punitive, or consequential loss of profits, loss of earnings, loss of business opportunities, damages, expenses, or costs resulting directly or indirectly from, or otherwise arising in connection with the use of Ragibull app, its Service, or Site Content.</p>
                    <p>RAGIBULL, LLC, SHALL NOT BE LIABLE FOR ANY DAMAGES WHATSOEVER RESULTING FROM ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF RAGIBULL/OUR SERVICE, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM RAGIBULL, (IV) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SITE BY ANY THIRD PARTY, AND/OR (V) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOUR USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA  RAGIBULL APP/ SITE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY.</p>
                    <p>TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL RAGIBULL, LLC, ITS AFFILIATES OR DELIVERY PARTNERS BE LIABLE FOR (A) ANY INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, EXEMPLARY OR CONSEQUENTIAL DAMAGES OR ANY LOSS OF USE, DATA, BUSINESS, OR PROFITS, REGARDLESS OF LEGAL THEORY, WHETHER OR NOT RAGIBULL, LLC, HAS BEEN WARNED OF THE POSSIBILITY OF SUCH DAMAGES, AND EVEN IF A REMEDY FAILS OF ITS ESSENTIAL PURPOSE; (B) AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICES SHALL NOT BE MORE THAN THE AMOUNTS PAID BY YOU TO RAGIBULL, LLC, IF ANY, FOR THE PAST 3 MONTHS OF THE SERVICES IN QUESTION.</p>
                    <p><b>10.	Indemnification</b></p>
                    <p>You agree to indemnify and hold Ragibull, LLC, and its subsidiaries, affiliates, officers, agents, co-branders or other partners, and employees, harmless from any claim or demand, including reasonable Attorneys fees, made by any third party due to or arising out of, your use of Ragibull app/Service, your connection to Ragibull app/Site, your violation of the Terms, your intentional or negligent violations of any applicable laws or governmental regulation, your contractual relation with a third party, or your violation of any rights including but not limited to rights relating to patent or copyright of another.</p>
                    <p><b>11.	Fees and Payments</b></p>
                    <p>Ragibull charges five percent (5%) of the total amount of your order as the fees for providing its services. Unless otherwise stated, all fees/charges will not be refundable. In case of a Charge-back Request from our Merchant bank, we reserve the right to immediately interrupt the service provided to you until the Charge-back Request has been formally settled between Ragibull, LLC, and the Merchant Service Authority. This process may take more than a few weeks. If you are disputing any billing issues, Ragibull, LLC, encourages you to first contact it to resolve such issues to avoid having the service for your account be interrupted on notification of a Charge-back. Ragibull, LLC, maintains the right to reject any service to you while a Charge-back Notice is pending investigation by the Merchant Service Authority.</p>
                    <p><b>12. Refund</b></p>
                    <p>Request to refund for any reason, will be referred to the Restaurant. If the Restaurant owner agrees to your refund request, we will refund the amount paid by you relating to the order for which refund is requested.</p>
                    <p><b>13.	Retention</b></p>
                    <p>We will retain information you provide to Ragibull, for as long as we need it to provide you the Services. If you delete your account, we will also delete this information. But please note: (1) there might be some latency in deleting this information from our servers and back-up storage; and (2) we may retain this information if necessary to comply with our legal obligations, resolve disputes, or enforce our Agreements.</p>
                    <p><b>14.	Proprietary Rights</b></p>
                    <p>These Terms do not transfer any right, title, or interest in Ragibull, Service or the Site Content to User. Subject to the terms of this Agreement, we grant to you a limited, personal, non-exclusive, non-transferable license to use Ragibull to the extent you have the right to access the service. Your right to use Ragibull and access the service will be limited by the terms of this Agreement. Except for this license granted to you, we retain all right, title, and interest in and to Ragibull, including all related intellectual property rights. Ragibull is protected by applicable intellectual property laws, including copyright law and international treaties. Except as otherwise explicitly provided in this Agreement or as may be expressly permitted by applicable law, you will not, and will not permit or authorize third parties to: (a) reproduce, modify, translate, enhance, decompile, disassemble, reverse engineer, or create derivative works of Ragibull; (b) rent, lease, or sublicense Ragibull; nor (c) circumvent or disable any security or technological features or measures in Ragibull. </p>
                    <p>If you download, print or display any Ragibull app/Ragibull Site Content for personal use, you must retain and you shall not cover or obscure all copyright and other proprietary notices. You may not use any metatags or other “hidden text” utilizing the Ragibull name or trademarks or service marks without our express written consent. Any unauthorized use terminates the permission or license granted by Ragibull, LLC.</p>
                    <p>Ragibull, LLC, reserves the right, but not the obligation, to take any appropriate legal action for any illegal or unauthorized use of the Site/app or violation of the Terms and Conditions.</p>
                    <p><b>15.	Termination</b></p>
                    <p>You are free to stop using Ragibull and our Services at any time. We also reserve the right to suspend or end the Services at any time at our discretion and without notice. For example, we may suspend or terminate your use of Ragibull/Services if you are not complying with these Terms, or use Ragibull in a manner that would cause us legal liability, disrupt the Services or disrupt others use of the Services. We will of course provide you with notice via the email address associated with your account before we do so.</p>
                    <p><b>16.	Mobile Usage</b></p>
                    <p>Use of Ragibull involves use of mobile features that allow you to access the Service from your mobile phone. Ragibull, LLC, does not charge for use of these features, but your mobile service provider may do so.</p>
                    <p><b>17.	Waiver, Severability &amp; Assignment</b></p>
                    <p>Ragibull, LLC's failure to enforce a provision at any time is not a waiver of its right to do so later. If a provision is found unenforceable, the remaining provisions of the Terms will remain in full effect and an enforceable term will be substituted reflecting our intent as closely as possible. You may not assign any of your rights under these Terms, and any such attempt will be void. Ragibull, LLC, may assign its rights to any of its affiliates or subsidiaries, or to any successor in interest, to continue the Services.</p>
                    <p><b>18.	Ability to Accept Terms and Conditions</b></p>
                    <p>You affirm that you are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Terms and Conditions, and to abide by and comply with these Terms and Conditions.</p>
                    <p><b>19. Governing Law and Dispute Resolution</b></p>
                    <p> These Terms shall be governed by and construed in accordance with laws of California State, USA, without regard to its choice of law provisions. The United Nations Convention on Contracts for the International Sale of Goods shall not apply to these Terms. </p>
                    <p>Any dispute, claim or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation or validity thereof shall be settled exclusively by the competent court in located in United States. User hereby consents to personal jurisdiction of such court.</p>
                    <p><b>20. Contact Information</b></p>
                    <p>Ragibull welcomes your questions or comments regarding the Terms:<br/>
                    Ragibull LLC<br />
                    1043 Garland Ave <br />
                    Unit C #608 <br />
                    San Jose, CA 95126-3159
                    </p>
                  </Grid>
            </Grid>
            
        </div>

      </Grid>
    </>
  );
};

export default Terms;