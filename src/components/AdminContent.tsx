"use client";
import type { Session } from "next-auth";
import { api } from "~/trpc/react";
import { AddOffer } from "./AddOffer";
import CarList from "./CarList";

type Props = {
  sessionData: Session | null;
};

export const AdminContent = ({ sessionData }: Props) => {
  // const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  // const [newTopic, setNewTopic] = useState<string>("");
  // const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
  //   undefined, // no input
  //   {
  //     enabled: sessionData?.user !== undefined,
  //   },
  // );

    const { data: offers = [], refetch: refetchOffers, isFetching: fetchingOffers } = api.offer.getAll.useQuery();

  // const createTopic = api.topic.create.useMutation({
  //   onSuccess: () => {
  //     void refetchTopics();
  //   },
  // });

  // const { data: notes, refetch: refetchNotes } = api.note.getAll.useQuery(
  //   { topicId: selectedTopic?.id ?? "" },
  //   {
  //     enabled: sessionData?.user !== undefined && selectedTopic !== null,
  //   },
  // );

  // const createNote = api.note.create.useMutation({
  //   onSuccess: () => {
  //     void refetchNotes();
  //   },
  // });

  // const deleteNote = api.note.delete.useMutation({
  //   onSuccess: () => void refetchNotes(),
  // });

  // const updateNote = api.note.update.useMutation({
  //   onSuccess: () => void refetchNotes(),
  // });

  const createOffer = api.offer.create.useMutation(
    {
      onSuccess: () => void refetchOffers(),
    }
  );

  // useEffect(() => {
  //   setSelectedTopic((selectedTopic) => selectedTopic ?? topics?.[0] ?? null);
  // }, [topics]);

  return sessionData?.user ? (
    <div className="mx-5 mt-5 grid grid-cols-1 gap-2">
      <div className="px-2">

         {
         fetchingOffers ? <h3>Loading...</h3> : 
         <CarList offerList={offers}/>}

        <AddOffer
         createOffer={
          ( {price, description, fuel, year, make, model }) => {
            createOffer.mutate({
              price,
              description,
              fuel,
              year,
              make,
              model,
            });
          }}/>
      </div>
    </div>
  ) : (
    <div className="mx-5 mt-5">Sign in with google or github to see your notes</div>
  );
};
