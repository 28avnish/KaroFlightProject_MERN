import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { updateAdminUser } from "../../features/action/auth";
import { clearReduxStore } from "../../features/slices/auth";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { userData,adminsData, isLoading } = useSelector((state) => state.auth);

  // 👇 show/hide password fields
  const [showPasswordFields, setShowPasswordFields] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: userData?.name || "",
      email: userData?.email || ""
    },
  });

  const onSubmit = (data) => {

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
        id: userData?._id,
        ...data,
        ...(showPasswordFields ? { password: data.password } : {}), // 👈 only send if updated
      })
    );
  };

  useEffect(()=>{
    if(adminsData?.status){
        dispatch(clearReduxStore())
    }
  },[adminsData])

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

export default EditProfile;
