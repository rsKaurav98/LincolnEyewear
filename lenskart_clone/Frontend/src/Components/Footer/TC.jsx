// TC.jsx
import React from 'react';
import { Box, Container, Heading, Text, List, ListItem } from '@chakra-ui/react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const TC = () => {
    return (
        <Box>
            <Navbar />
            <Container maxWidth="80rem">
                <Box sx={{ my: 4 }}>
                    <Box sx={{ my: 2 }}>
                        <Heading as="h1" fontWeight="bold">
                            Terms and Conditions
                        </Heading>
                        <Text variant="body1" color="textSecondary">
                            Last updated May 05, 2024
                        </Text>
                    </Box>
                    <br/>

                    <Box sx={{ my: 2 }}>
                        <Text as="h3" size="md">
                            Agreement to Our Legal Terms
                        </Text>
                        <Text variant="body1" paragraph>
                            We are LINCOLN VENTURES LLP, doing business as Lincoln Eyewear ("Company," "we," "us," "our"), a company registered in India at Lincoln Eyewear 3-H, Patel Industrial Estate, Pratap Nagar, Dabhoi Road, Vadodara, Vadodara, Gujarat 390004.
                        </Text>
                        <Text variant="body1" paragraph>
                            We operate the website{' '}
                            <a href="https://lincolneyewear.com/" style={{ textDecoration: 'underline', color: 'blue' }}>
                                https://lincolneyewear.com/
                            </a>{' '}
                            (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
                        </Text>
                        <Text variant="body1" paragraph>
                            You can contact us by email at Info.lincolneyewear@gmail.com or by mail to Lincoln Eyewear 3-H, Patel Industrial Estate, Pratap Nagar, Dabhoi Road, Vadodara, Vadodara, Gujarat 390004, India.
                        </Text>
                        <Text variant="body1" paragraph>
                            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and LINCOLN VENTURES LLP, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                        </Text>
                        <Text variant="body1" paragraph>
                            Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms from time to time. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
                        </Text>
                        <Text variant="body1" paragraph>
                            All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.
                        </Text>
                        <Text variant="body1" paragraph>
                            We recommend that you print a copy of these Legal Terms for your records.
                        </Text>


                        {/* Table of Contents */}
                        <Box sx={{ my: 2 }}>
                            <br />
                            <Heading as="h3" size="md">
                                Table of Contents
                            </Heading>
                            <List styleType="disc" mb={4} pl={5}>
                                <ListItem>
                                    <Text variant="body1">
                                        <a href="#our-services" style={{ textDecoration: 'underline', color: 'blue' }}>
                                            1. OUR SERVICES
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a
                                            href="#intellectual-property-rights"
                                            style={{ textDecoration: 'underline', color: 'blue' }}
                                        >
                                            2. INTELLECTUAL PROPERTY RIGHTS
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a href="#user-representations" style={{ textDecoration: 'underline', color: 'blue' }}>
                                            3. USER REPRESENTATIONS
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a href="#products" style={{ textDecoration: 'underline', color: 'blue' }}>
                                            4. PRODUCTS
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a
                                            href="#purchases-and-payment"
                                            style={{ textDecoration: 'underline', color: 'blue' }}
                                        >
                                            5. PURCHASES AND PAYMENT
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a href="#return-policy" style={{ textDecoration: 'underline', color: 'blue' }}>
                                            6. RETURN POLICY
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a
                                            href="#prohibited-activities"
                                            style={{ textDecoration: 'underline', color: 'blue' }}
                                        >
                                            7. PROHIBITED ACTIVITIES
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a
                                            href="#user-generated-contributions"
                                            style={{ textDecoration: 'underline', color: 'blue' }}
                                        >
                                            8. USER GENERATED CONTRIBUTIONS
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a href="#contribution-license" style={{ textDecoration: 'underline', color: 'blue' }}>
                                            9. CONTRIBUTION LICENSE
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a
                                            href="#guidelines-for-reviews"
                                            style={{ textDecoration: 'underline', color: 'blue' }}
                                        >
                                            10. GUIDELINES FOR REVIEWS
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a
                                            href="#third-party-websites-and-content"
                                            style={{ textDecoration: 'underline', color: 'blue' }}
                                        >
                                            11. THIRD-PARTY WEBSITES AND CONTENT
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a
                                            href="#services-management"
                                            style={{ textDecoration: 'underline', color: 'blue' }}
                                        >
                                            12. SERVICES MANAGEMENT
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a href="#privacy-policy" style={{ textDecoration: 'underline', color: 'blue' }}>
                                            13. PRIVACY POLICY
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a
                                            href="#term-and-termination"
                                            style={{ textDecoration: 'underline', color: 'blue' }}
                                        >
                                            14. TERM AND TERMINATION
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a
                                            href="#modifications-and-interruptions"
                                            style={{ textDecoration: 'underline', color: 'blue' }}
                                        >
                                            15. MODIFICATIONS AND INTERRUPTIONS
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a href="#governing-law" style={{ textDecoration: 'underline', color: 'blue' }}>
                                            16. GOVERNING LAW
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a
                                            href="#dispute-resolution"
                                            style={{ textDecoration: 'underline', color: 'blue' }}
                                        >
                                            17. DISPUTE RESOLUTION
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a href="#corrections" style={{ textDecoration: 'underline', color: 'blue' }}>
                                            18. CORRECTIONS
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a href="#disclaimer" style={{ textDecoration: 'underline', color: 'blue' }}>
                                            19. DISCLAIMER
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a
                                            href="#limitations-of-liability"
                                            style={{ textDecoration: 'underline', color: 'blue' }}
                                        >
                                            20. LIMITATIONS OF LIABILITY
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a href="#indemnification" style={{ textDecoration: 'underline', color: 'blue' }}>
                                            21. INDEMNIFICATION
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a href="#user-data" style={{ textDecoration: 'underline', color: 'blue' }}>
                                            22. USER DATA
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a
                                            href="#electronic-communications-transactions-and-signatures"
                                            style={{ textDecoration: 'underline', color: 'blue' }}
                                        >
                                            23. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a
                                            href="#california-users-and-residents"
                                            style={{ textDecoration: 'underline', color: 'blue' }}
                                        >
                                            24. CALIFORNIA USERS AND RESIDENTS
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a href="#miscellaneous" style={{ textDecoration: 'underline', color: 'blue' }}>
                                            25. MISCELLANEOUS
                                        </a>
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text variant="body1">
                                        <a href="#contact-us" style={{ textDecoration: 'underline', color: 'blue' }}>
                                            26. CONTACT US
                                        </a>
                                    </Text>
                                </ListItem>
                            </List>
                        </Box>

                        {/* Sections */}
                        <Box sx={{ my: 2 }}>
                            <br />
                            <Heading as="h3" size="md" id="our-services">
                                1. OUR SERVICES
                            </Heading>
                            <Text variant="body1" paragraph>
                                The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
                            </Text>
                            <Text variant="body1" paragraph>
                                The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
                            </Text>

                            <br />
                            <Heading as="h3" size="md" id="intellectual-property-rights">
                                2. INTELLECTUAL PROPERTY RIGHTS
                            </Heading>
                            <Text variant="body1" paragraph>
                                <strong>Our intellectual property</strong>
                            </Text>
                            <Text variant="body1" paragraph>
                                We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
                            </Text>
                            <Text variant="body1" paragraph>
                                Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
                            </Text>
                            <Text variant="body1" paragraph>
                                The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use only.
                            </Text>

                            <Text variant="body1" paragraph>
                                <strong>Your use of our Services</strong>
                            </Text>
                            <Text variant="body1" paragraph>
                                Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to:
                                <ul>
                                    <li>access the Services; and</li>
                                    <li>download or print a copy of any portion of the Content to which you have properly gained access.</li>
                                </ul>
                                solely for your personal, non-commercial use.
                            </Text>
                            <Text variant="body1" paragraph>
                                Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                            </Text>
                            <Text variant="body1" paragraph>
                                If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: <a href="mailto:info.lincolneyewear@gmail.com">info.lincolneyewear@gmail.com</a>. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
                            </Text>
                            <Text variant="body1" paragraph>
                                We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
                            </Text>
                            <Text variant="body1" paragraph>
                                Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
                            </Text>

                            <br />
                            <Heading as="h3" size="md" id="user-representations">
                                3. USER REPRESENTATIONS
                            </Heading>
                            <Text variant="body1" paragraph>
                                By using the Services, you represent and warrant that:
                            </Text>
                            <List styleType="disc" mb={4} pl={5}>
                                <ListItem>
                                    all registration information you submit will be true, accurate, current, and complete;
                                </ListItem>
                                <ListItem>
                                    you will maintain the accuracy of such information and promptly update such registration information as necessary;
                                </ListItem>
                                <ListItem>
                                    you have the legal capacity and you agree to comply with these Legal Terms;
                                </ListItem>
                                <ListItem>
                                    you are not under the age of 13;
                                </ListItem>
                                <ListItem>
                                    you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services;
                                </ListItem>
                                <ListItem>
                                    you will not access the Services through automated or non-human means, whether through a bot, script, or otherwise;
                                </ListItem>
                                <ListItem>
                                    you will not use the Services for any illegal or unauthorized purpose; and
                                </ListItem>
                                <ListItem>
                                    your use of the Services will not violate any applicable law or regulation.
                                </ListItem>
                            </List>
                            <Text variant="body1" paragraph>
                                If you provide any information that is untrue, inaccurate, not current, or incomplete, we may suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
                            </Text>

                            <br />
                            <Heading as="h3" size="md" id="products">
                                4. PRODUCTS
                            </Heading>
                            <Text variant="body1" paragraph>
                                We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Services. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products.
                            </Text>
                            <Text variant="body1" paragraph>
                                All products are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
                            </Text>

                            <br />
                            <Heading as="h3" size="md" id="purchases-and-payment">
                                5. PURCHASES AND PAYMENT
                            </Heading>
                            <Text variant="body1" paragraph>
                                We accept the following forms of payment:
                            </Text>
                            <List styleType="disc" mb={4} pl={5}>
                                <ListItem>
                                    Visa
                                </ListItem>
                                <ListItem>
                                    Mastercard
                                </ListItem>
                                <ListItem>
                                    American Express
                                </ListItem>
                                <ListItem>
                                    Discover
                                </ListItem>
                                <ListItem>
                                    UPI
                                </ListItem>
                            </List>
                            <Text variant="body1" paragraph>
                                You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in INR.
                            </Text>
                            <Text variant="body1" paragraph>
                                You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. If your order is subject to recurring charges, then you consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until you notify us of your cancellation.
                            </Text>
                            <Text variant="body1" paragraph>
                                We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment. We also reserve the right to refuse any order placed through the Services.
                            </Text>

                            <br />
                            <Heading as="h3" size="md" id="return-policy">
                                6. RETURN POLICY
                            </Heading>
                            <Text variant="body1" paragraph>
                                Please review our Return Policy posted on the Services prior to making any purchases.
                            </Text>
                            <br />
                            <Heading as="h3" size="md" id="prohibited-activities">
                                7. PROHIBITED ACTIVITIES
                            </Heading>
                            <Text variant="body1" paragraph>
                                You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                            </Text>
                            <Text variant="body1" paragraph>
                                As a user of the Services, you agree not to:
                            </Text>
                            <List styleType="disc" mb={4} pl={5}>
                                <ListItem>
                                    Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.
                                </ListItem>
                                <ListItem>
                                    Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.
                                </ListItem>
                                <ListItem>
                                    Use a buying agent or purchasing agent to make purchases on the Services.
                                </ListItem>
                                <ListItem>
                                    Use the Services to advertise or offer to sell goods and services.
                                </ListItem>
                                <ListItem>
                                    Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.
                                </ListItem>
                                <ListItem>
                                    Engage in unauthorized framing of or linking to the Services.
                                </ListItem>
                                <ListItem>
                                    Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.
                                </ListItem>
                                <ListItem>
                                    Make improper use of our support services or submit false reports of abuse or misconduct.
                                </ListItem>
                                <ListItem>
                                    Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.
                                </ListItem>
                                <ListItem>
                                    Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.
                                </ListItem>
                                <ListItem>
                                    Attempt to impersonate another user or person or use the username of another user.
                                </ListItem>
                                <ListItem>
                                    Sell or otherwise transfer your profile.
                                </ListItem>
                                <ListItem>
                                    Use any information obtained from the Services in order to harass, abuse, or harm another person.
                                </ListItem>
                                <ListItem>
                                    Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.
                                </ListItem>
                                <ListItem>
                                    Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.
                                </ListItem>
                                <ListItem>
                                    Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.
                                </ListItem>
                                <ListItem>
                                    Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.
                                </ListItem>
                                <ListItem>
                                    Delete the copyright or other proprietary rights notice from any Content.
                                </ListItem>
                                <ListItem>
                                    Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.
                                </ListItem>
                                <ListItem>
                                    Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.
                                </ListItem>
                                <ListItem>
                                    Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").
                                </ListItem>
                                <ListItem>
                                    Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or using or launching any unauthorized script or other software.
                                </ListItem>
                                <ListItem>
                                    Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.
                                </ListItem>
                                <ListItem>
                                    Use the Services in a manner inconsistent with any applicable laws or regulations.
                                </ListItem>
                            </List>
                            <br />
                            <Heading as="h3" size="md" id="user-generated-contributions">
                                8. USER GENERATED CONTRIBUTIONS
                            </Heading>
                            <Text variant="body1" paragraph>
                                The Services do not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Services' Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:
                            </Text>
                            <List styleType="disc" mb={4} pl={5}>
                                <ListItem>
                                    The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.
                                </ListItem>
                                <ListItem>
                                    You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.
                                </ListItem>
                                <ListItem>
                                    You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.
                                </ListItem>
                                <ListItem>
                                    Your Contributions are not false, inaccurate, or misleading.
                                </ListItem>
                                <ListItem>
                                    Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.
                                </ListItem>
                                <ListItem>
                                    Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).
                                </ListItem>
                                <ListItem>
                                    Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.
                                </ListItem>
                                <ListItem>
                                    Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.
                                </ListItem>
                                <ListItem>
                                    Your Contributions do not violate any applicable law, regulation, or rule.
                                </ListItem>
                                <ListItem>
                                    Your Contributions do not violate the privacy or publicity rights of any third party.
                                </ListItem>
                                <ListItem>
                                    Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.
                                </ListItem>
                                <ListItem>
                                    Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.
                                </ListItem>
                                <ListItem>
                                    Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.
                                </ListItem>
                            </List>
                            <Text variant="body1" paragraph>
                                Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.
                            </Text>

                            <br />
                            <Heading as="h3" size="md" id="contribution-license">
                                9. CONTRIBUTION LICENSE
                            </Heading>
                            <Text variant="body1" paragraph>
                                You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).
                            </Text>
                            <Text variant="body1" paragraph>
                                By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
                            </Text>
                            <Text variant="body1" paragraph>
                                We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
                            </Text>


                            <br />
                            <Heading as="h3" size="md" id="guidelines-for-reviews">
                                10. GUIDELINES FOR REVIEWS
                            </Heading>
                            <Text>
                                We may provide you areas on the Services to leave reviews or ratings. When posting a review, you must comply with the following criteria:
                            </Text>
                            <List>
                                <ListItem>(1) you should have firsthand experience with the person/entity being reviewed;</ListItem>
                                <ListItem>(2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hateful language;</ListItem>
                                <ListItem>(3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability;</ListItem>
                                <ListItem>(4) your reviews should not contain references to illegal activity;</ListItem>
                                <ListItem>(5) you should not be affiliated with competitors if posting negative reviews;</ListItem>
                                <ListItem>(6) you should not make any conclusions as to the legality of conduct;</ListItem>
                                <ListItem>(7) you may not post any false or misleading statements; and</ListItem>
                                <ListItem>(8) you may not organize a campaign encouraging others to post reviews, whether positive or negative.</ListItem>
                            </List>
                            <Text>
                                We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to review.
                            </Text>
                            <br />
                            <Heading as="h3" size="md" id="third-party-websites-and-content">
                                11. THIRD-PARTY WEBSITES AND CONTENT
                            </Heading>
                            <Text>
                                The Services may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Services and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Legal Terms no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Services or relating to any applications you use or install from the Services. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us blameless from any harm caused by your purchase of such products or services. Additionally, you shall hold us blameless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.
                            </Text>
                            <br />
                            <Heading as="h3" size="md" id="services-management">
                                12. SERVICES MANAGEMENT
                            </Heading>
                            <Text>
                                We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
                            </Text>
                            <br />
                            <Heading as="h3" size="md" id="privacy-policy">
                                13. PRIVACY POLICY
                            </Heading>
                            <Text>
                                We care about data privacy and security. Please review our Privacy Policy: https://lincolneyewear.com/privacy-policy/. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in India. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in India, then through your continued use of the Services, you are transferring your data to India, and you expressly consent to have your data transferred to and processed in India.
                            </Text>
                            <br />
                            <Heading as="h3" size="md" id="term-and-termination">
                                14. TERM AND TERMINATION
                            </Heading>
                            <Text>
                                These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                            </Text>
                            <Text>
                                If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
                            </Text>
                            <br />
                            <Heading as="h3" size="md" id="modifications-and-interruptions">
                                15. MODIFICATIONS AND INTERRUPTIONS
                            </Heading>
                            <Text>
                                We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We also reserve the right to modify or discontinue all or part of the Services without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
                            </Text>
                            <Text>
                                We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
                            </Text>
                            <br />
                            <Heading as="h3" size="md" id="governing-law">
                                16. GOVERNING LAW
                            </Heading>
                            <Text variant="body1" color="textSecondary">
                                These Legal Terms shall be governed by and defined following the laws of India. LINCOLN VENTURES LLP and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
                            </Text>

                            <br />
                            <Heading as="h3" size="md" id="dispute-resolution">
                                17. DISPUTE RESOLUTION
                            </Heading>
                            <Text variant="body1" color="textSecondary">
                                You agree to irrevocably submit all disputes related to these Legal Terms or the legal relationship established by these Legal Terms to the jurisdiction of the India courts. LINCOLN VENTURES LLP shall also maintain the right to bring proceedings as to the substance of the matter in the courts of the country where you reside or, if these Legal Terms are entered into in the course of your trade or profession, the state of your principal place of business.
                            </Text>

                            <br />
                            <Heading as="h3" size="md" id="corrections">
                                18. CORRECTIONS
                            </Heading>
                            <Text variant="body1" color="textSecondary">
                                There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
                            </Text>

                            <br />
                            <Heading as="h3" size="md" id="disclaimer">
                                19. DISCLAIMER
                            </Heading>
                            <Text variant="body1" color="textSecondary">
                                THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
                            </Text>

                            <br />
                            <Heading as="h3" size="md" id="limitations-of-liability">
                                20. LIMITATIONS OF LIABILITY
                            </Heading>
                            <Text variant="body1" color="textSecondary">
                                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                            </Text>
                            <Box sx={{ my: 4 }}>
                                <br />
                                <Heading id="indemnification" as="h3" size="md"  >
                                    21. Indemnification
                                </Heading>
                                <Text variant="body1">
                                    You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
                                </Text>
                            </Box>

                            <Box sx={{ my: 4 }}>
                                <br />
                                <Heading id="user-data" as="h3" size="md" >
                                    22. User Data
                                </Heading>
                                <Text variant="body1">
                                    We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
                                </Text>
                            </Box>

                            <Box sx={{ my: 4 }}>
                                <br />
                                <Heading id="electronic-communications" as="h3" size="md" >
                                    23. Electronic Communications, Transactions, and Signatures
                                </Heading>
                                <Text variant="body1">
                                    Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
                                </Text>
                            </Box>

                            <Box sx={{ my: 4 }}>
                                <br />
                                <Heading id="california-users" as="h3" size="md" >
                                    24. California Users and Residents
                                </Heading>
                                <Text variant="body1" >
                                    If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
                                </Text>
                            </Box>

                            <Box sx={{ my: 4 }}>
                                <br />
                                <Heading id="miscellaneous" as="h3" size="md"  >
                                    25. Miscellaneous
                                </Heading>
                                <Text variant="body1">
                                    These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
                                </Text>
                            </Box>

                            <Box sx={{ my: 4 }}>
                                <br />
                                <Heading id="contact-us" as="h3" size="md"  >
                                    26. Contact Us
                                </Heading>
                                <Text variant="body1">
                                    In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
                                </Text>
                                <br />
                                <Text variant="body1" color="gray">
                                    LINCOLN VENTURES LLP <br />
                                    Lincoln Eyewear 3-H, patel Industrial estate, <br />
                                    Pratap nagar, dabhoi road, vadodara <br />
                                    Vadodara, Gujrat 390004 <br />
                                    India
                                </Text>
                                <br />
                                <Text variant="body1" color="gray">
                                    info.lincolneyewear@gmail.com
                                </Text>
                                <br />
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </Box>
    );
};

export default TC;
