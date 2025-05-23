import ConversationDetail from "@/app/components/inbox/ConversationDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Conversation detail',
    description: 'Conversation detail',

}

const ConversationPageId = () => {
    return (
        <main className="max-w-[1500] mx-auto px-6 py-6">
            <ConversationDetail/>
        </main>
    );
}

export default ConversationPageId;