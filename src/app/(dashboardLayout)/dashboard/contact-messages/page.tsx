import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type TMessage = {
  _id: string;
  name: string;
  email: string;
  subject: string;
  contactNumber: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};

const ContactMessage = async () => {
  const response = await fetch(
    "https://tinyrnd-server.vercel.app/api/v1/contact-messages",
    {
      next: {
        tags: ["contact-message"],
      },
    }
  );
  const data = await response.json();

  return (
    <div>
      <div className="h-10 bg-white px-4 flex items-center text-lg font-bold rounded-md">
        See Contact Messages
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {data?.data.map((message: TMessage) => (
          <div className=" bg-white p-4 rounded-md" key={message._id}>
            <div className="flex gap-4 items-center">
              <Avatar className="h-14 w-14 rounded-md grid place-items-center">
                <AvatarImage src="" alt="@shadcn" />
                <AvatarFallback>
                  {message.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-bold ">{message.name}</h3>
                <p className="tracking-[0.8px] flex gap-2 items-center text-[#090d2] text-[16px]">
                  {new Date(message.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            <p className="font-bold py-2">Subject: {message.subject}</p>

            <div className="text-lg space-y-1">
              <p>{message.contactNumber}</p>
              <p>{message.email}</p>
              <p>{message.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactMessage;
