"use client";

import MaxWidthWrapper from "@/helper/ui/MaxWidthWrapper";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../../../typings";

type Props = {
  contactInfo: PageInfo;
};

const Contact = ({ contactInfo }: Props) => {
  type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:mayamayavir@gmail.com?subject=${data.subject}&body=Hi my name is ${data.name} , ${data.message} ${data.email}`;
  };

  return (
    <MaxWidthWrapper>
      <div
        className={
          "h-screen relative flex flex-col md:flex-row  text-center justify-center items-center "
        }
      >
        <h3 className={"heroTitle"}>Contact</h3>
        <div className={"flex flex-col space-y-5 mt-32 md:mt-32"}>
          <h4 className={"text-lg xl:text-3xl text-balance md:text-center"}>
            I have got just what you need.{""}
            <br />
            <span className={"decoration-[#F7AB0A]/50 underline"}>
              Lets Talk
            </span>
          </h4>
          <div className="space-y-2 mx-auto">
            <div className={"flex items-center gap-x-5"}>
              {/* <FontAwesomeIcon
                className={"w-5 h-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse"}
                icon={faPhone}
              />
              <p className="text-base">+91-{contactInfo.phoneNumber}</p> */}
            </div>
            <div className={"flex items-center gap-x-5 "}>
              <FontAwesomeIcon
                className={"w-5 h-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse"}
                icon={faEnvelope}
              />
              <p className="text-base">{contactInfo.email}</p>
            </div>
            <div className={"flex items-center gap-x-5"}>
              <FontAwesomeIcon
                className={"w-5 h-5 md:h-7 md:w-7 text-[#F7AB0A] animate-pulse"}
                icon={faLocationDot}
              />
              <p className="text-base">{contactInfo.address}</p>
            </div>
          </div>

          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className={
              "w-screen px-10 md:px-0 flex flex-col space-y-5 md:space-y-2 md:w-fit mx-auto"
            }
          >
            <div
              className={
                "flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-2"
              }
            >
              <input
                {...register("name")}
                type={"text"}
                className={"contact-Input"}
                placeholder={"Name"}
              />
              <input
                {...register("email")}
                type={"email"}
                className={"contact-Input"}
                placeholder={"Email"}
              />
            </div>
            <input
              {...register("subject")}
              type="text"
              className={"contact-Input"}
              placeholder={"Subject"}
            />
            <textarea
              {...register("message")}
              className={"contact-Input"}
              placeholder={"Message"}
            />
            <button
              type={"submit"}
              className="bg-[#F7AB0A] py-3 text-black rounded-md font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Contact;
