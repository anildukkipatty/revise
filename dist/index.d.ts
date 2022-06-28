import { Collection, NFT, NFTRevision } from "./types";
export interface TokenDataPartial {
    name: string;
    image: string;
    tokenId: string;
    description?: string;
}
export declare type Attribute = {
    [keys in string]: string | number;
};
export interface RevisionList extends Omit<NFT, "metaData"> {
    metaData: Attribute[];
    revisions: NFTRevisionEntity[];
    collection: Collection;
}
export interface NFTEntity extends Omit<NFT, "metaData"> {
    metaData: Attribute[];
}
export interface NFTRevisionEntity extends Omit<NFTRevision, "metaData"> {
    metaData: Attribute[];
}
declare class NFTObj {
    private auth;
    private nft;
    constructor({ auth, nft }: {
        auth: string;
        nft: NFTEntity;
    });
    private metaDataAsMap;
    private setMetaData;
    setProperty(key: string, value: string | number): this;
    deleteProperty(key: string): this;
    setName(name: string): this;
    setImage(image: string): this;
    setTokenId(tokenId: string): this;
    setDescription(description: string): this;
    save(): Promise<any>;
    revisions(): Promise<NFTRevisionEntity[]>;
    revisionsLink(): Promise<string>;
}
export declare class Revise {
    private auth;
    constructor(values: {
        auth: string;
    });
    fetchCollections: () => Promise<Collection[]>;
    fetchCollection: (collectionId: any) => Promise<Collection>;
    addCollection: ({ name, uri }: {
        name: any;
        uri: any;
    }) => Promise<Collection>;
    addNFT: (tokenData: TokenDataPartial, properties: Attribute[], collectionId?: string) => Promise<NFT>;
    updateNFT: (nftId: string) => Promise<NFTObj>;
    nft: (nft: NFTEntity) => Promise<NFTObj>;
    fetchNFTs: (collectionId?: string) => Promise<NFTEntity[]>;
    fetchNFT: (nftId: string) => Promise<NFTEntity>;
    deleteNFT: (nftId: string) => Promise<any>;
    fetchRevisions: (nftId: string) => Promise<RevisionList>;
    every: (durationString: string) => Promise<Automation>;
}
declare class Automation {
    private apiResolver;
    private duration;
    constructor(duration: Duration);
    listenTo(api: string | Function): this;
    start(cb: Function): Promise<void>;
}
declare class Duration {
    private durationString;
    private miliseconds;
    constructor(durationString: string);
    getMiliseconds(): number;
}
export {};
