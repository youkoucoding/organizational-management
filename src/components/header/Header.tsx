import * as React from "react";
import { AddOrgButton } from "components/buttons";
import { AddOrganizationModal } from "components/modal/AddOrganizationModal";

export const Header: React.FC = () => {
  const [showAddOrgModal, setShowAddOrgModal] = React.useState(false);

  return (
    <nav className="md:flex hidden bg-gray-400 rounded-b-sm fixed top-0 w-full z-10 shadow md:flex-row md:flex-nowrap md:justify-start items-center px-2 py-1">
      <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap px-4">
        <div className="text-xl hidden lg:inline-block font-semibold">
          Organization DashBoard
        </div>
        <div
          onClick={() => setShowAddOrgModal(!showAddOrgModal)}
          className="mx-6"
        >
          <AddOrgButton />
        </div>
        <AddOrganizationModal
          showAddOrgModal={showAddOrgModal}
          setShowAddOrgModal={setShowAddOrgModal}
        />
        <div className="md:flex hidden flex-row items-center lg:ml-auto mr-3">
          <div className="relative flex w-full flex-wrap items-stretch h-6" />
        </div>
      </div>
    </nav>
  );
};
