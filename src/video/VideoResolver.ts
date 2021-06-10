import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { VideoCreateInput } from "./VideoCreateInput";
import { VideoSchema } from "./VideoSchema";
import { VideoService } from "./VideoService";
import { VideoUpdateInput } from "./VideoUpdateInput";

@Resolver(VideoSchema)
export class VideoResolver {
    private service: VideoService;

    constructor() {
        this.service = new VideoService();
    }

    @Query(type => [VideoSchema])
    async videos(): Promise<VideoSchema[]> {
        return this.service.videos();
    }

    @Query(type => VideoSchema)
    async video(@Arg("id") id: string): Promise<VideoSchema | undefined> {
        const video = await this.service.video(id);

        if (video === undefined) {
            throw new Error(`${id} não foi encontrado!`);
        }

        return video;
    }

    @Mutation(type => VideoSchema)
    async create(@Arg("data") data: VideoCreateInput): Promise<VideoSchema> {
        return this.service.create(data);
    }

    @Mutation(type => VideoSchema)
    async update(@Arg("id") id: string, @Arg("data") data: VideoUpdateInput): Promise<VideoSchema | undefined> {
        const videoExists = await this.service.video(id);

        if (!videoExists) {
            throw new Error("Video não encontrado!");
        }

        return this.service.update(id, data);
    }

    @Mutation(type => Boolean)
    async delete(@Arg("id") id: string): Promise<boolean> {
        try {
            await this.service.delete(id);
        }
        catch (err) {
            throw new Error(`Error: ${err.message}`);
        }

        return true;
    }
}