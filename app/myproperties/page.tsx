import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'My Properties',
    description: 'Properties page',

}
const MyProperties = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6">
            <h1 className="my-6 text-2xl">My Properties</h1>

        </main>
    );
}

export default MyProperties;