import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { createAdminUser } from "../../../features/action/auth";

const CreateAdminUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { adminsData, isLoading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const roleType = watch("roleType");
  const modules = watch("modules"); // 👀 watch panel access

  const onSubmit = (data) => {
    let finalAccess = [];

    if (data.roleType === "superadmin") {
      finalAccess = panelOptions; // all access
    } else {
      finalAccess = data.modules || []; // modules will already be an array
      if (finalAccess.length === 0) {
        setError("modules", {
          type: "manual",
          message: "Select at least one panel access",
        });
        return;
      }
    }

    dispatch(createAdminUser({ ...data, modules: finalAccess }));
  };

  // 👇 Watch checkboxes dynamically and clear error when at least one is selected
  useEffect(() => {
    if (roleType === "admin") {
      const selected = Object.keys(modules || {}).filter((key) => modules[key]);
      if (selected.length > 0) {
        clearErrors("modules");
      }
    }
  }, [modules, roleType, clearErrors]);

  useEffect(() => {
    if (adminsData?.status) {
      navigate("/admins");
    }
  }, [adminsData]);

  const panelOptions = ["General", "SEO", "Blog", "Offer", "Newsletter"];

  return (
    <div>
      <div className="text-gray-600">
        <div className="flex justify-center">
          <h3 className="text-gray-600 text-2xl font-semibold sm:text-3xl">
            Create New Admin
          </h3>
        </div>
        <div className="bg-white rounded-lg shadow p-4 py-6 sm:rounded-lg sm:max-w-5xl mt-8 mx-auto">
          <form
            className="space-y-6 mx-8 sm:mx-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Row 1: Name + Email */}
            <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
              <div className="w-full">
                <label className="font-medium">Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  className="w-full mt-2 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
                />
                <span className="text-red-500">{errors?.name?.message}</span>
              </div>

              <div className="w-full">
                <label className="font-medium">Email</label>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  className="w-full mt-2 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
                />
                <span className="text-red-500">{errors?.email?.message}</span>
              </div>
            </div>

            {/* Row 2: Role Type (Radio) + Password */}
            <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
              <div className="w-full">
                <label className="font-medium">Role Type</label>
                <div className="flex mt-2 gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      {...register("roleType", {
                        required: "Role type is required",
                      })}
                      type="radio"
                      value="superadmin"
                      className="accent-blue-600"
                    />
                    Superadmin
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      {...register("roleType", {
                        required: "Role type is required",
                      })}
                      type="radio"
                      value="admin"
                      className="accent-blue-600"
                    />
                    Admin
                  </label>
                </div>
                <span className="text-red-500">
                  {errors?.roleType?.message}
                </span>
              </div>

              <div className="w-full">
                <label className="font-medium">Password</label>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type="password"
                  className="w-full mt-2 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
                />
                <span className="text-red-500">
                  {errors?.password?.message}
                </span>
              </div>
            </div>

            {/* Panel Access Checkboxes → Only show if Admin */}
            {roleType === "admin" && (
              <div>
                <label className="font-medium">Panel Access</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
                  {panelOptions.map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={option}
                        {...register("modules", {
                          validate: (value, formValues) =>
                            formValues.modules && formValues.modules.length > 0
                              ? true
                              : "Select at least one panel access",
                        })}
                        className="accent-blue-700"
                      />
                      {option}
                    </label>
                  ))}
                </div>
                {errors?.modules && (
                  <span className="text-red-500">{errors.modules.message}</span>
                )}
              </div>
            )}

            {/* Submit */}
            <div style={{ marginTop: "2rem" }}>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 font-medium hover:bg-blue-700 active:bg-blue-700 rounded-lg duration-150"
              >
                {isLoading ? <ClipLoader color="#c4c2c2" /> : <>Create</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAdminUser;
