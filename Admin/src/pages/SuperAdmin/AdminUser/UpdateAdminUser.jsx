import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { useNavigate, useLocation } from "react-router-dom";
import { updateAdminUser } from "../../../features/action/auth"; // 👈 update action

const UpdateAdminUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { adminsData, isLoading } = useSelector((state) => state.auth);

  // 👇 show/hide password fields
  const [showPasswordFields, setShowPasswordFields] = useState(false);

  // 👇 get admin data from navigate state
  const { state: admin } = location || {};
  console.log(admin);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: admin?.name || "",
      email: admin?.email || "",
      roleType: admin?.roleType || "",
      modules: admin?.modules || [],
      status: admin?.status || "active",
    },
  });

  const roleType = watch("roleType");
  const modules = watch("modules");

  const onSubmit = (data) => {
    let finalAccess = [];

    if (data.roleType === "superadmin") {
      finalAccess = panelOptions;
    } else {
      finalAccess = data.modules || [];
      if (finalAccess.length === 0) {
        setError("modules", {
          type: "manual",
          message: "Select at least one panel access",
        });
        return;
      }
    }

    // ✅ If password fields are shown, validate them
    if (showPasswordFields) {
      if (!data.password) {
        setError("password", {
          type: "manual",
          message: "Password is required",
        });
        return;
      }
      if (data.password !== data.confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: "Passwords do not match",
        });
        return;
      }
    }

    dispatch(
      updateAdminUser({
        id: admin?._id,
        ...data,
        modules: finalAccess,
        ...(showPasswordFields ? { password: data.password } : {}), // 👈 only send if updated
      })
    );
  };

  // 👇 clear module errors dynamically
  useEffect(() => {
    if (roleType === "admin") {
      const selected = Array.isArray(modules) ? modules : [];
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
            Update Admin Details
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
                  className="w-full mt-2 px-5 py-2 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
                />
                <span className="text-red-500">{errors?.name?.message}</span>
              </div>

              <div className="w-full">
                <label className="font-medium">Email</label>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  className="w-full mt-2 px-5 py-2 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
                />
                <span className="text-red-500">{errors?.email?.message}</span>
              </div>
            </div>

            {/* Row 2: Role Type (Radio) + Status Toggle */}
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
                      className="accent-pink-700"
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
                      className="accent-pink-700"
                    />
                    Admin
                  </label>
                </div>
                <span className="text-red-500">
                  {errors?.roleType?.message}
                </span>
              </div>

              {/* Status Toggle */}
              <div className="w-full">
                <label className="font-medium">Status</label>
                <div className="flex items-center mt-2 gap-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="active"
                      {...register("status")}
                      className="accent-green-600"
                    />
                    Active
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="suspended"
                      {...register("status")}
                      className="accent-red-600"
                    />
                    Suspended
                  </label>
                </div>
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
                        {...register("modules")}
                        defaultChecked={admin?.modules?.includes(option)}
                        className="accent-pink-700"
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

            {/* Change Password Button */}
            <div className="mt-6">
              {!showPasswordFields ? (
                <button
                  type="button"
                  onClick={() => setShowPasswordFields(true)}
                  className="px-4 py-2 text-pink-700 border border-pink-700 rounded-lg hover:bg-pink-50"
                >
                  Change Password
                </button>
              ) : (
                <>
                  <div className="sm:flex space-y-6 sm:space-y-0 justify-between gap-10">
                    <div className="w-full">
                      <label className="font-medium">New Password</label>
                      <input
                        {...register("password")}
                        type="password"
                        className="w-full mt-2 px-5 py-2 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
                      />
                      <span className="text-red-500">
                        {errors?.password?.message}
                      </span>
                    </div>
                    <div className="w-full">
                      <label className="font-medium">Confirm Password</label>
                      <input
                        {...register("confirmPassword")}
                        type="password"
                        className="w-full mt-2 px-5 py-2 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
                      />
                      <span className="text-red-500">
                        {errors?.confirmPassword?.message}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Submit */}
            <div style={{ marginTop: "2rem" }}>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-pink-700 font-medium hover:bg-pink-800 active:bg-pink-700 rounded-lg duration-150"
              >
                {isLoading ? <ClipLoader color="#c4c2c2" /> : <>Update</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAdminUser;
