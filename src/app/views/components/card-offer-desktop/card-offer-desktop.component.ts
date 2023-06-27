import {Component, Input, OnInit} from "@angular/core";
import {Offer} from "src/app/models/interfaces/Offers.interfaces";

@Component({
    selector: "app-card-offer-desktop",
    templateUrl: "./card-offer-desktop.component.html",
    styleUrls: ["./card-offer-desktop.component.scss"],
})
export class CardOfferDesktopComponent implements OnInit {
    @Input() logo: string = "";
    @Input() new: boolean = false;
    @Input() featured: boolean = false;
    @Input() company: string = "";
    @Input() position: string = "";
    @Input() postedAt: string = "";
    @Input() contract: string = "";
    @Input() location: string = "";
    @Input() tools: Array<string> = [];
    @Input() role: string = "";
    @Input() level: string = "";
    @Input() languages: Array<string> = [];
    @Input() findItem: (
        item: string,
        index: number,
        offers: Array<Offer>,
    ) => void = (item: string, index: number, offers: Array<Offer>) => {};
    @Input() offers: Array<Offer> = [];
    @Input() activeTools: any = [];

    public finalTools: Array<string> = [];

    constructor() {
        this.activeTool = this.activeTool.bind(this);
    }

    ngOnInit(): void {
        this.finalTools.push(this.role);
        this.finalTools.push(this.level);
        this.finalTools = [
            ...this.finalTools,
            ...this.languages,
            ...this.tools,
        ];
    }

    /**
     * Determines the CSS style for an active tool based on whether it exists in the `activeTools` array.
     * @param {string} tool The tool to check for activation.
     * @returns {string} The CSS style string to apply to the tool if it is active, or an empty string if it is not.
     */
    public activeTool(tool: string): string {
        return this.activeTools.find((item: any) => item.item === tool)
            ? "background: hsl(176, 34%, 60%); color: hsl(185, 58%, 96%);"
            : "";
    }
}
