import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import bgImg from '../../../../assets/images/terms-conditions/bg.png';

const TermsConditions = () => {
  return (
    <div className="bg-white text-black pb-[100px] mt-[55px]">
      <div className="relative p-4">
        <img
          src={bgImg}
          alt="Terms & Conditions"
          className="w-full h-48 border rounded-lg object-cover"

        />
        <div className="absolute inset-1 bg-opacity-50 flex items-center justify-center mt-28">
          <Typography variant="h5" component="div" className="text-white font-bold" sx={{ fontWeight: "bold" }}>
            TERMS & CONDITIONS
          </Typography>
        </div>
      </div>

      <div className="bg-[#F0F0F0] rounded-lg shadow-md p-4 mt-4">
        {/* Introduction Section */}
        <Typography variant="h6" component="h2" className="mb-4 text-[#4FC2CA] font-semibold">
          Introduction
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This User Agreement, Privacy Policy, terms, conditions, and all policies published on the "adminCustom" platform are set to protect and preserve the rights of both the adminCustom Information Technology Foundation and the user who accesses the site with or without registration, or the consumer benefiting from the content with or without registration.
        </Typography>
      </div>

      <div className="bg-[#F0F0F0] rounded-lg shadow-md p-4 mt-4">
        <Typography variant="h6" component="h2" className="mt-6 font-semibold">
          Article 1: <span className="text-[#4FC2CA]">Definitions</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          adminCustom Platform: An electronic platform that allows users to create an account to publish their content according to regulations and legislation.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          User: The account creator on the adminCustom platform for the purpose of communication, browsing, publishing content, or creating an electronic store.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Electronic Store: The electronic account that allows the user to display a product, sell it, provide a service, advertise it, or exchange related data.
        </Typography>
      </div>

      <div className="bg-[#F0F0F0] rounded-lg shadow-md p-4 mt-4">
        {/* Article 2: Terms of Use Section */}
        <Typography variant="h6" component="h2" className="mt-6 font-semibold">
          Article 2: <span className="text-[#4FC2CA]">Terms of Use</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          As a second party in this agreement and as a beneficiary of the services of the adminCustom platform, you must comply with the following.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Do not advertise or upload content or items inappropriate to the available classifications on the platform; review the advertisement terms.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Do not use any illegal means to access advertisements or other users' data, violate the policies and rights of adminCustom Information Technology Foundation, access platform content, or collect information and data concerning adminCustom or its clients and use them in any form or republish them.
          Do not use our services if you are not legally qualified to complete this agreement.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Do not manipulate the prices of goods either in selling or buying, harming other consumers.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Do not include in your advertisement any false or misleading statement, or phrases that could directly or indirectly deceive or mislead the consumer, or defamation or slander.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Do not involve in policies, international sovereignties, prominent figures, or any unlawful discussions in adminCustom Information Technology Foundation.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Do not transfer your account or activity to other sites while it carries the logo or services of the foundation.
          Do not infringe upon the intellectual property rights of the adminCustom Information Technology Foundation, including copyright, trademarks, patents, publicity rights, database rights, or any other intellectual property rights belonging to the foundation or licensed to it.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Do not include in your advertisement a logo or trademark you do not have the right to use, a counterfeit trademark, or anything violating the intellectual property rights of others or a patent.
          Do not violate human rights regulations or engage in human trafficking in any form and adhere to the advertising controls for labor services.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Adhere to the real estate advertisement controls specified by the General Authority for Real Estate.
          Obtain a license from the Ministry of Tourism for any tourism offers or products.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Adhere to the controls and licenses issued by the National Center for Wildlife Protection.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Do not collect or use personal data of site users or their electronic communications for unauthorized or unauthorized purposes or disclose them to another party for a fee or without a fee unless with the consent of the person to whom the personal data relates or if required by the regulations.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Do not engage in any activity that could harm the reputation of the adminCustom Information Technology Foundation in any way, whether on the platform itself or on other social media platforms, and the foundation reserves its right to claim all resulting damages.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Do not impersonate the adminCustom Information Technology Foundation, its representative, or its employee, or any capacity suggesting you are affiliated with the foundation unless you have official permission from the foundation.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          The use of this service is prohibited by any non-human user, except for non-human users affiliated with the following companies only:
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4 font-bold" sx={{ marginTop: "20px", fontWeight: "bold" }}>
          Google</Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4 font-bold" sx={{ marginTop: "20px", fontWeight: "bold" }}>
          Facebook </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4 font-bold" sx={{ marginTop: "20px", fontWeight: "bold" }}>
          Twitter  </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Failure to comply with these terms grants the adminCustom Information Technology Foundation the right to suspend your membership and refer your violation to the competent authorities for sanctions when necessary, and to prevent you from accessing the platform and adding your phone number to the list of suspended accounts and numbers without any responsibility and without the need to notify you of that, and you do not have the right to object. You also commit to not returning to using the platform except after the platform's approval.
        </Typography>
      </div>
      <div className="bg-[#F0F0F0] rounded-lg shadow-md p-4 mt-4">
        <Typography variant="h6" component="h2" className="mt-6 font-semibold">
          Article 3: <span className="text-[#4FC2CA]">Responsibility</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The adminCustom Information Technology Foundation provides a service that enables the user to display their goods and publish content according to the agreed usage policy. It does not provide any guarantees and is not responsible in case the user or consumer does not adhere to it. The adminCustom platform disclaims responsibility for any risks, damages, consequences, or losses incurred by the seller, buyer, or any other party, and those affected should visit the "Contact Us" link and explain the damage they have incurred. The foundation will take action according to the type of incident without any responsibility. By using the adminCustom platform, you acknowledge full responsibility for ensuring compliance with all relevant laws, regulations, and systems when using the platform. You also bear the responsibility of managing all purchase and delivery operations if the account is an electronic store, and resolving problems and disputes arising from the advertisement content is entirely your responsibility. You also commit to the content controls specified by the adminCustom platform and bear the consequences and damages of the content alone, and the adminCustom platform disclaims any claims resulting or following from your dealings. By using the adminCustom platform, you authorize the platform to save the personal and non-personal data and information you have entered on the foundation's servers, and we have the right to review them. By using the adminCustom platform, you acknowledge the platform's right to monitor private messages when necessary to ensure they are free of usage agreement violations, and we have the right to delete the advertisement and handle the attached images when necessary. The directives, decisions, and instructions of the site's management and supervisors are binding on the second party after they have been delivered to them via private messages on the site, mobile phone, email, or notification system, and they must comply and act accordingly. By using the platform, you acknowledge that if you violate the systems and laws followed in the Kingdom or the policies and laws of the adminCustom platform, the adminCustom Information Technology Foundation has the right to claim all damages and losses from you and charge you attorney fees in all matters and issues related to your violation, and you commit to compensating for them. </Typography>

      </div>
      <div className="bg-[#F0F0F0] rounded-lg shadow-md p-4 mt-4">
        <Typography variant="h6" component="h2" className="mt-6 font-semibold">
          Article 4: <span className="text-[#4FC2CA]">Membership Terms</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Membership is the username that the person registered with on the adminCustom platform, linked to their mobile number, and must be subject to the following conditions:
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          You must choose a proper and suitable name during the registration process.

        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          It is prohibited to create more than one account for the same user on the platform
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>

          It is prohibited to use more than one membership on the platform for each person or entity.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          You must update your mobile number linked to the membership in case your mobile number changes or is lost.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          If your membership name contains a trade name or trademark, you must be the owner of the trademark or authorized to use the name or trademark.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>It is prohibited to sell the membership or transfer it to another party or allow any other party to use it, and the original membership owner is responsible for any violations.</Typography>
      </div>
    </div>
  );
};

export default TermsConditions;