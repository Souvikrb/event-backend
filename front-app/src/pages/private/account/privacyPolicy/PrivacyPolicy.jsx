
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import bgImg from '../../../../assets/images/privacy-policy/privacy-policy.png';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-black pb-[100px] mt-[55px]">
      <div className="relative p-4">
        <img
          src={bgImg}
          alt="Terms & Conditions"
          className="w-full h-48 border rounded-lg"

        />
        <div className="absolute inset-1 bg-opacity-50 flex items-center justify-center mt-28">
          <Typography variant="h5" component="div" className="text-white font-bold" sx={{ fontWeight: "bold" }}>
            PRIVACY POLICY
          </Typography>
        </div>
      </div>

      <div className="bg-[#F0F0F0] rounded-lg shadow-md p-4 mt-4">
        <Typography variant="body2" color="text.secondary">
          We value your concerns and interest regarding the privacy of your data on the Internet. This policy has been prepared to help you understand the nature of the data we collect from you when you visit our website and how we handle this personal data</Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Browsing: This platform was not designed to collect your personal data from your computer or mobile device while browsing the site. Rather, the data provided by you will only be used with your knowledge and consent </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Internet Protocol (IP) Address: Whenever you visit any website, including this platform, the hosting server will record your IP address, the date and time of your visit, the type of internet browser you use, and the URL of any website that refers you to this site.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Links to other websites: Our site may include links to other websites. We are not responsible for those sites, and you can review the privacy policies and content of those websites accessed through any link within this site.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Disclosure of Information: We will maintain the privacy and confidentiality of all personal data we obtain. This information will only be disclosed if required by law or when we believe in good faith that such action is necessary or desirable to comply with the law, or to defend or protect the property rights of this platform or its beneficiaries.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Data required to execute the transactions requested by you: When we need any personal data, we will ask you to provide it voluntarily. This information will help us contact you and fulfill your requests whenever possible. The data provided by you will never be sold to any third party for their marketing benefit without your prior written consent unless it is done on a collective basis for statistical and research purposes without including any data that can be used to identify you.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Contacting Us: All data provided by you will be treated as confidential. Forms submitted directly on the network require data that will help us improve our site. The data provided by you will be used to respond to all your inquiries, feedback, or requests by this site or any of its affiliates.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Disclosure of Information to any Third Party: We will not sell, trade, lease, or disclose any information to any third party outside this platform or its affiliated platforms and sites.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Modifications to the Privacy and Information Confidentiality Policy: We reserve the right to amend the terms and conditions of the privacy and confidentiality policy if necessary and when appropriate. The amendments will be implemented here or on the main privacy policy page, and you will be continuously informed of the data we have obtained, how we will use it, and who we will provide it to.
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Contacting Us: You can contact us when needed by clicking on the Contact Us link available in the platform links or sending to our email address, adminCustom on the above-mentioned domain
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mt-4" sx={{ marginTop: "20px" }}>
          Finally, your concerns and interest regarding the privacy and confidentiality of data are of utmost importance to us. We hope to achieve this through this policy.  </Typography>
      </div>

    </div>
  );
};

export default PrivacyPolicy