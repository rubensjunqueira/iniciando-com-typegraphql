import { getRepository, Repository } from "typeorm";
import { VideoCreateInput } from "./VideoCreateInput";
import { VideoSchema } from "./VideoSchema";
import { VideoUpdateInput } from "./VideoUpdateInput";

export class VideoService {
    private repository: Repository<VideoSchema>;

    constructor() {
        this.repository = getRepository(VideoSchema);
    }

    async videos(): Promise<VideoSchema[]> {
        return this.repository.find();
    }

    async video(id: string): Promise<VideoSchema | undefined> {
        return this.repository.findOne(id);
    }

    async create(data: VideoCreateInput): Promise<VideoSchema> {
        const newVideo = this.repository.create(data);

        return this.repository.save(newVideo);
    }

    async update(id: string, data: VideoUpdateInput): Promise<VideoSchema | undefined> {
        await this.repository.update(id, data);

        return this.repository.findOne(id);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}