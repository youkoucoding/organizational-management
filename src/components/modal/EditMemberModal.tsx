import * as React from "react";
import { GlobalContext } from "state/context";
import { Dialog, Transition } from "@headlessui/react";
import { MemberModel } from "model";
import { useForm, SubmitHandler } from "react-hook-form";
import { ACTION } from "state/types";

type Props = {
  showMemberModal: boolean;
  setShowMemberModal: (state: boolean) => void;
  member: MemberModel;
};

export const EditMemberModal = ({
  showMemberModal,
  setShowMemberModal,
  member,
}: Props) => {
  const { dispatch } = React.useContext(GlobalContext);

  // 将需要修改的 member 信息 作为 defaultValue 传入useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: member.id,
      name: member.name,
      age: member.age,
      status: member.status,
    },
  });

  const handleEditedMemberSubmit: SubmitHandler<MemberModel> = (data) => {
    setShowMemberModal(false);
    dispatch({ type: ACTION.EditMember, payload: data });
  };

  const cancelButtonRef = React.useRef(null);
  return (
    <Transition.Root show={showMemberModal} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setShowMemberModal}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* make the modal at screen center */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-gray-50 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={handleSubmit(handleEditedMemberSubmit)}>
                  <div className="px-4 py-5 bg-white sm:p-6 font-medium">
                    {"Editing member is "}
                    {": "}
                    <span className="text-lg">{member.id}</span>
                  </div>
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            {errors.name?.type === "required" ? (
                              <span className="text-red-500 font-medium">
                                Name is required
                              </span>
                            ) : (
                              "Name"
                            )}
                          </label>
                          <input
                            type="text"
                            id="name"
                            {...register("name", {
                              required: true,
                              maxLength: 20,
                            })}
                            className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="age"
                            className="block text-sm font-medium text-gray-700"
                          >
                            {errors.age ? (
                              <span className="text-red-500 font-medium">
                                Need to be above 18 below 99
                              </span>
                            ) : (
                              "Age"
                            )}
                          </label>
                          <input
                            type="number"
                            id="age"
                            {...register("age", {
                              required: true,
                              min: 18,
                              max: 100,
                            })}
                            className="mt-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="status"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Status
                          </label>
                          <select
                            id="status"
                            {...register("status")}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                          >
                            <option value="activated">Activated</option>
                            <option value="inactivated">Inactivated</option>
                          </select>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="role"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Role
                          </label>
                          <select
                            id="role"
                            name="role"
                            autoComplete=""
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                          >
                            <option>Member</option>
                            <option>Representation</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
