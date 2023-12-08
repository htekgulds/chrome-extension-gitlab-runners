export default `
<div id="runners-button" class="project-action-button dropdown gl-dropdown inline">
    <button class="gl-button btn btn-md btn-default dropdown-toggle gl-dropdown-toggle dropdown-icon-only has-tooltip"
        title="Runners" data-toggle="dropdown" aria-label="Runners" data-display="static"
        data-qa-selector="show_runners_button" type="button" aria-expanded="true"><span class="gl-button-text">
            <svg class="s16 position-relative file-icon"><use href="/assets/file_icons/file_icons-6489590d770258cc27e4698405d309d83e42829b667b4d601534321e96739a5a.svg#gitlab"></use></svg>
            <svg class="s16 gl-icon dropdown-chevron" data-testid="chevron-down-icon">
                <use href="/assets/icons-b25b55b72e1a86a9ca8055a5c421aae9b89fc86363fa02e2109034d756e56d28.svg#chevron-down"></use>
            </svg>
        </span>
    </button>
    <div class="dropdown-menu dropdown-menu-left" role="menu" style="width: 340px;">
        <section>
            <h5 class="m-0 dropdown-bold-header">Runners</h5>
            <div id="runners-droprown-content" class="dropdown-menu-content"></div>
        </section>
    </div>
</div>
`
