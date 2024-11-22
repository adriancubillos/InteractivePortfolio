'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const sendEmail = (params) => {

    const toastId = toast.loading('Sending your missive, please wait...')

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000, // You can not send more than 1 email for 5 seconds.
          }

        })
      .then(
        () => {
          toast.success("Aye, I have received your quest. I will get back to you soon.!", {
            id: toastId
          })
        },
        (error) => {
          toast.error("Alas, it seems the message has been waylaid. Perhaps the paths were beset by trolls, delaying its arrival.", {
            id: toastId
          })
        },
      );
  };

  const onSubmit = data => {
    const templateParams = {
      to_name: "adriancubcru",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  }

  console.log(errors);

  return (
    <>
      <Toaster richColors={true} />

      <form className='max-w-md pt-10 w-full flex flex-col items-center justify-center space-y-4'
        onSubmit={handleSubmit(onSubmit)}>
        <input className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
          type="text"
          placeholder="name"
          {...register("name", {
            required: "This field is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters long"
            }
          })}
        />
        {
          errors.name && <p className='inline-block self-start text-accent'>{errors.name.message}</p>
        }
        <input className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
          type="email" placeholder="email" {...register("email", { required: "This field is required" })} />
        {
          errors.email && <p className='inline-block self-start text-accent'>{errors.email.message}</p>
        }

        <textarea className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
          placeholder="message" {...register("message", {
            required: "This field is required",
            maxLength: {
              value: 500,
              message: "Message must be no more than 500 characters"
            },
            minLength: {
              value: 50,
              message: "Message must be at least 50 characters long"
            }
          })} />

        {
          errors.message && <p className='inline-block self-start text-accent'>{errors.message.message}</p>
        }

        <input className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid 
      hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize'
          value="Dispatch your missive!"
          type="submit" />
      </form>
    </>
  );
}