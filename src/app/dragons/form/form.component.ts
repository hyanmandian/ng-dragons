import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import Dragon from "src/app/core/models/dragon.model";
import { DragonService } from "src/app/core/services/dragon/dragon.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  loading = false;

  data: Dragon = {};

  constructor(
    private dragonService: DragonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.isCreate()) return;

    const { slug } = this.activatedRoute.snapshot.params;

    this.loading = true;

    this.dragonService.show(slug).subscribe(
      ({ histories, ...data }) => {
        this.data = {
          ...data,
          histories: (<[]>histories).join(",")
        };
        this.loading = false;
      },
      () => {
        this.router.navigate([""]);
      }
    );
  }

  getTitle(): string {
    if (this.isCreate()) return "Create";

    if (this.isEdit()) return "Edit";

    return "Details";
  }

  isCreate() {
    return !this.isEdit() && !this.isReadonly();
  }

  isEdit() {
    return (
      this.activatedRoute.snapshot.url[1] &&
      this.activatedRoute.snapshot.url[1].path === "edit"
    );
  }

  isReadonly() {
    return (
      this.activatedRoute.snapshot.url[1] &&
      this.activatedRoute.snapshot.url[1].path === "show"
    );
  }

  onBack() {
    this.router.navigate([""]);
  }

  save(form: NgForm) {
    this.loading = true;

    const data = {
      ...form.value,
      histories: form.value.histories.split(",")
    };

    if (this.isCreate()) {
      return this.dragonService.store(data).subscribe(({ slug }) => {
        this.router.navigate([slug, "edit"]);
      });
    }

    return this.dragonService.update(this.data.slug, data).subscribe(() => {
      this.router.navigate([""]);
    });
  }
}
