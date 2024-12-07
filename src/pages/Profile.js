import { useSelector } from "react-redux";
import LineChart from "../component/Profile/Chart";
import React, { useState, useEffect } from "react";
import *as UserServices from "../services/UserService";
import { useNavigate } from "react-router-dom";
import { useMutationHooks } from "../hooks/useMutationHooks";
import * as message from "../component/MessageComponent/Message";
const ProfileUser = () => {
    const [isLoginGG, setGG] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [Users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const user = useSelector((state) => state.user);
    // States for Forgot Password form

    const [forgotEmailValue, setForgotEmailValue] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;
        if (!forgotEmailValue) {
            isValid = false;
            formErrors["forgotEmail"] = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(forgotEmailValue)) {
            isValid = false;
            formErrors["forgotEmail"] = "Email is invalid.";
        } else if (forgotEmailValue.length >= 30) {
            isValid = false;
            formErrors["forgotEmail"] = "Vui lòng nhập không quá 30 ký tự";
        }
        setErrors(formErrors);
        return isValid;
    };

    const mutation = useMutationHooks((data) => UserServices.sentTokenResetPassword(data));

    const { data, isError, isSuccess } = mutation;
    useEffect(() => {
        if (isSuccess) {
            if (data.status == 'Error') {
                message.error(data.message);
            } else {
                message.success("Đã gửi mã xác nhận thành công. Vui lòng kiểm tra lại email của bạn !");
            }
        }
    }, [isError, isSuccess]);

    const handleSubmitToken = (e) => {
        e.preventDefault();
        if (validateForm()) {
            mutation.mutate({
                email: forgotEmailValue
            });
        }
    };


    useEffect(() => {
        if (user?.authGoogleID !== null) {
            setGG(true)
        } else {
            setGG(false)
        }
    }, [user?.authGoogleID]);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div className="mx-4 py-28 lg:flex gap-x-4 flex-col lg:flex-row">
            <div className="lg:w-2/3 w-full rounded-xl border-2 shadow-xl px-6 lg:px-20">
                <div className="flex py-8 flex-col lg:flex-row items-center lg:items-start">
                    <img className="w-20 h-20 rounded-xl" src="https://images.unsplash.com/photo-1728155469374-df8569326706?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="description" />
                    <div className="mt-4 lg:mt-0 lg:ml-4 text-center lg:text-left">
                        <div className="text-3xl font-semibold">{user.username}</div>
                        <div className="text-gray-500">#{user.user_id}</div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-2">
                    <div className="text-gray-500 flex items-center">Join date:<span className="text-black px-2">{user.crea}</span></div>
                    <div className="w-full lg:w-[1px] bg-gray-500"></div>
                    <div className="text-gray-500 flex items-center">Last active:<span className="text-black px-2">1 second ago</span></div>
                    <div className="w-full lg:w-[1px] bg-gray-500"></div>
                    <div className="text-gray-500 flex items-center">Active time:<span className="text-black px-2">0 hours</span></div>
                    <div className="w-full lg:w-[1px] bg-gray-500"></div>
                    <div className="text-gray-500 flex items-center">Lesson completion:<span className="text-black px-2">0</span></div>
                </div>
                <LineChart />
            </div>
            <div className="lg:w-1/3 w-full grid grid-flow-row gap-y-4 mt-4 lg:mt-0">
                <div className="rounded-xl border-2 shadow-xl px-4 py-4">
                    <div className="text-3xl mb-4">Account information</div>
                    <table className="table-auto border-collapse border border-gray-300 w-full text-left text-xl">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 w-1/3">Information</th>
                                <th className="border border-gray-300 px-4 py-2 w-2/3">Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Email</td>
                                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Display name</td>
                                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Google login</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {isLoginGG ? (
                                        <span className="text-white bg-green-500 rounded-xl px-3 py-1">Yes</span>
                                    ) : (
                                        <span className="text-white bg-red-500 rounded-xl px-3 py-1">No</span>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Join date</td>
                                <td className="border border-gray-300 px-4 py-2">{user.createdAt}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Total days</td>
                                <td className="border border-gray-300 px-4 py-2">{user.totalDay}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Active days</td>
                                <td className="border border-gray-300 px-4 py-2">{user.activeDay}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Inactive days</td>
                                <td className="border border-gray-300 px-4 py-2">{user.inactiveDay}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Active hours</td>
                                <td className="border border-gray-300 px-4 py-2">{user.inactiveDay}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="rounded-xl border-2 shadow-xl px-4 py-4">
                    <div className="text-3xl mb-4">Change password</div>
                    <div className="flex flex-col lg:flex-row gap-2">
                        <input
                            className="w-full lg:w-3/4 border-2 border-gray-500 rounded-lg p-2"
                            name="forgotEmail"
                            placeholder="Input your Email"
                            value={forgotEmailValue}
                            onChange={(e) => setForgotEmailValue(e.target.value)}
                        />
                        {errors.email && <small className="error-message-l">{errors.email}</small>}
                        <button onClick={handleSubmitToken} className="w-full lg:w-1/4 bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white">Summit</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProfileUser;