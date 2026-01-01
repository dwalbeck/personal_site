import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList: React.FC = () => {
  return (
    <div id="projects" className="project-section bg-gray-100 rounded-lg py-4">
      <div className="container mx-auto">
        <div className="text-center mb-2">
          <h1 className="text-2xl font-light mb-0">Projects</h1>
        </div>
        {/* Add justify-center to center items when there's only one column */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto justify-center">

          {/* Blueroof360 Project */}
          <ProjectItem
            title="Blueroof360"
            description="Complete redesign of main application"
            websiteUrl="https://www.blueroof360.com/"
            listItems={[
                "Evaluated current product and architect of redesigned improved modular replacement with added features and capabilities, engineered to handle scalability and the growing demands using the best suited technologies.",
                "Integrated IoT devices for real-time data collection and analysis",
                "Designed main code structure and oversaw the development of the native mobile application.",
                "Removed third party paid dependency by switching to an open source mapping solution. This saved on recurring costs and functionally operated in a fraction of the time and had more features that we utilized, which enhanced our app.",
                "Restructured both the hardware, software, and overall architecture for improved stability, redundancy, and security, which includes a combination of cloud servers, load balancers, dedicated servers, CDN storage, and networking of all elements.",
                "Designed new schema and database, as well as wrote the migration script to move customers and all associated data from old system to new."
            ]}
          />

          {/* GlobalBased Project */}
          <ProjectItem
            title="GlobalBased Portal"
            description="Main company application, handling external user account, internal use, accounting, promotions, campaigns and more"
            githubUrl=""
            listItems={[
              "Completed redesign of architecture for Lead Management Tracking System and accounting automation.",
              "Designed new fully relational database with enforced data integrity through foreign key references and rules.",
              "Designed and implemented completely dynamic accounting system for interaction with any number of accounts, merchants, gateways, and partners for custom mapping and translation of data.",
                "Configured and wrote code for custom interaction with an Asterisk server for all telecommunication over VoIP using soft phones and SIP channels, which improved efficiency and increased productivity and sales by 15%.",
                "Installed and configured several servers, and handled migration of external components to operate using in-house resources. This included a PDC, several web servers, primary & secondary DNS forked public/private servers with dynamic DHCP and 3 full MTA mail servers with web accessible e-mail client for virtual sites.",
                "Designed and coded dynamic reports and trend recognition with graphic display and downloadable exports."
            ]}
          />

          {/* Surepay Project */}
          <ProjectItem
            title="Surepay Portal"
            description="Multi-tier company application for loan management"
            githubUrl=""
            listItems={[
              "Designed software and hardware architecture for project consisting of a PHP portal front end, NodeJS API back end, Redis server and PostgreSQL database server",
              "Implemented code base frameworks, OAuth2 authentication, multi-tier session management and security implementation and enforcement",
              "Designed and built underwriting logic engine which connects and uses data returned by DataX third party service",
                "Dynamic PDF contact generation with tagging for client and official copy and storage to S3",
                "Payment processing integration to multiple merchant gateways for ACH and CC transactions"
            ]}
          />

        </div>
      </div>
    </div>
  );
};

export default ProjectList;
