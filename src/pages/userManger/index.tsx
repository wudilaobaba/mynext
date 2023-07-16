import { trpc } from "@/utils";
const UserManger = () => {
  const { data: userList } = trpc.memberRouter.list.useQuery();
  const { data: addResult, mutate } = trpc.memberRouter.create.useMutation();
  const addMember = async () => {
    const random = Math.floor(Math.random() * (99999 - 10000 + 10000) + 1);
    await mutate({
      name: "MM" + random,
      email: "44@11.x" + random,
      password: "2323$%" + random,
    });
    console.log(addResult);
  };
  return (
    <div>
      <button onClick={addMember}>新增</button>
      <div>
        {userList?.map((item) => (
          <div key={item.name}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};
export default UserManger;
